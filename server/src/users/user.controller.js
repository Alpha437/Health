const Joi = require('joi');
require('dotenv').config();
const { v4: uuid } = require('uuid');

const { sendEmail } = require('./helpers/mailer');
const User = require('./user.model');
const { generateJwt } = require('./helpers/generateJwt');

//Validate user schema
const userSchema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().required().min(4),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

exports.Signup = async (req, res) => {
  try {
    const result = userSchema.validate(req.body);
    if (result.error) {
      console.log(result.error.message);
      return res.json({
        error: true,
        status: 400,
        message: result.error.message,
      });
    }

    //Check if the email has been already registered.
    var user = await User.findOne({
      email: result.value.email,
    });

    if (user) {
      return res.json({
        error: true,
        message: 'Email is already in use',
      });
    }

    const hash = await User.hashPassword(result.value.password);

    const id = uuid(); //Generate unique id for the user.
    result.value.userId = id;

    //remove the confirmPassword field from the result as we dont need to save this in the db.
    delete result.value.confirmPassword;
    result.value.password = hash;

    let code = Math.floor(100000 + Math.random() * 900000); //Generate random 6 digit code.
    let expiry = Date.now() + 60 * 1000 * 15; //Set expiry 15 mins ahead from now

    const sendCode = await sendEmail(result.value.email, code);

    if (sendCode.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send verification email.",
      });
    }
    result.value.emailToken = code;
    result.value.emailTokenExpires = new Date(expiry);
    const newUser = new User(result.value);
    await newUser.save();

    return res.status(200).json({
      success: true,
      message: 'Registration Success',
      user: newUser,
    });
  } catch (error) {
    console.error('signup-error', error);
    return res.status(500).json({
      error: true,
      message: 'Cannot Register',
    });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: true,
        message: 'Cannot authorize user.',
      });
    }

    //1. Find if any account with that email exists in DB
    const user = await User.findOne({ email: email });

    // NOT FOUND - Throw error
    if (!user) {
      return res.status(404).json({
        error: true,
        message: 'Account not found',
      });
    }

    //2. Throw error if account is not activated
    if (!user.active) {
      return res.status(400).json({
        error: true,
        message: 'You must verify your email to activate your account',
      });
    }

    //3. Verify the password is valid
    const isValid = await User.comparePasswords(password, user.password);

    if (!isValid) {
      return res.status(400).json({
        error: true,
        message: 'Invalid credentials',
      });
    }

    //Generate Access token
    const { error, token } = await generateJwt(user.email, user.userId);
    if (error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't create access token. Please try again later",
      });
    }
    user.accessToken = token;

    await user.save();

    //Success
    return res.send({
      user: user,
    });
  } catch (err) {
    console.error('Login error', err);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again later.",
    });
  }
};

exports.Activate = async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!email || !code) {
      return res.json({
        error: true,
        status: 400,
        message: 'Please make a valid request',
      });
    }
    const user = await User.findOne({
      email: email,
      emailToken: code,
      emailTokenExpires: { $gt: Date.now() }, // check if the code is expired
    });

    if (!user) {
      return res.status(400).json({
        error: true,
        message: 'Invalid details',
      });
    } else {
      if (user.active)
        return res.send({
          error: true,
          message: 'Account already activated',
          status: 400,
        });

      user.emailToken = '';
      user.emailTokenExpires = null;
      user.active = true;

      await user.save();

      return res.status(200).json({
        success: true,
        message: 'Account activated.',
      });
    }
  } catch (error) {
    console.error('activation-error', error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.ForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.send({
        status: 400,
        error: true,
        message: 'Cannot be processed',
      });
    }
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.send({
        success: true,
        message:
          'If that email address is in our database, we will send you an email to reset your password',
      });
    }

    let code = Math.floor(100000 + Math.random() * 900000);
    let response = await sendEmail(user.email, code);

    if (response.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send mail. Please try again later.",
      });
    }

    let expiry = Date.now() + 60 * 1000 * 15;
    user.resetPasswordToken = code;
    user.resetPasswordExpires = expiry; // 15 minutes

    await user.save();

    return res.send({
      success: true,
      message:
        'If that email address is in our database, we will send you an email to reset your password',
    });
  } catch (error) {
    console.error('forgot-password-error', error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.ResetPassword = async (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;
    if (!token || !newPassword || !confirmPassword) {
      return res.status(403).json({
        error: true,
        message:
          "Couldn't process request. Please provide all mandatory fields",
      });
    }
    const user = await User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.send({
        error: true,
        message: 'Password reset token is invalid or has expired.',
      });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        error: true,
        message: "Passwords didn't match",
      });
    }
    const hash = await User.hashPassword(req.body.newPassword);
    user.password = hash;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = '';

    await user.save();

    return res.send({
      success: true,
      message: 'Password has been changed',
    });
  } catch (error) {
    console.error('reset-password-error', error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.SendCallId = async (req, res) => {
  try {
    const sendId = await sendEmail('dapoade11@gmail.com', req.body.callId);

    if (sendId.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send call-id email.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Email not sent',
    });
  }
};

exports.ResendCode = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    const sendCode = await sendEmail(user.email, user.emailToken);

    if (sendCode.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send verification email.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Email not sent',
    });
  }
};


exports.GetDoctors = async (req, res) => {
  try {
    const doctors = await User.find({role: 'doctor'});
    res.status(200).json(doctors);
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Could't get doctor's data",
    });
  }
};

exports.GetUsers = async (req, res) => {
  try {
    const allUser = await User.find({});
    res.status(200).json(allUser);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};
