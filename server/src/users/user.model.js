const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    userId: { type: String, unique: true, required: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    active: { type: Boolean, default: false },
    accessToken: { type: String, default: null },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'patient' },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpires: { type: Date, default: null },
    emailToken: { type: String, default: null },
    emailTokenExpires: { type: Date, default: null },
    appointments: { type: Object, default: [] },
    image: { public_id: String, url: String },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

const User = mongoose.model('user', userSchema);
module.exports = User;

module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10); // 10 rounds
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error('Hashing failed', error);
  }
};

module.exports.comparePasswords = async (inputPassword, hashedPassword) => {
  try {
    console.log(inputPassword);
    console.log(hashedPassword);
    return await bcrypt.compare(inputPassword, hashedPassword);
  } catch (error) {
    throw new Error('Comparison failed', error);
  }
};
