import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }, 
  email: {
    type: String,
    required: true,
    unique:true
  }
})



User.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});


User.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

User.methods.generateAuthToken = function(){
  const token = jwt.sign({id: this._id, username: this.username}, process.env.JWT_SECRET, {expiresIn: '1h'});
  return token;
}


export default mongoose.model("User", User);