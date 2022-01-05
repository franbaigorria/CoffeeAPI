const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: { type: String, required: [true] },
  email: { type: String, required: [true], unique: true },
  password: { type: String, required: [true] },
  image: { type: String },
  role: { type: String, required: [true], enum: ['ADMIN_ROLE', 'USER_ROLE'] },
  state: { type: Boolean, default: true },
  googleLog: { type: Boolean, default: true },
});

module.exports = model('User', UserSchema);
