import User from "../models/User.js";

export const login = async (req, res) => {
  const {username, password} = req.body;

  if(!username || !password) {
    return res.status(400).json({message: "Username and password are required"});
  }

  try {
    const user = await User.findOne({username});
    if(!user) {
      return res.status(404).json({message: "User not found"});
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch) {
      return res.status(401).json({message: "Invalid credentials"});
    }

    const token = user.generateAuthToken();

    res.status(200).json({token, user: {id: user._id, username: user.username, email: user.email}});
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({message: "Server error"});
  }
}

export const register = async (req, res) => {
  const {username, password, email} = req.body;

  if(!username || !password || !email){
    return res.status(400).json({message: "All fields are required"});
  }

  try {
    const existingUser = await User.find({email});
    if(existingUser.length > 0){
      return res.status(400).json({message: "User already exists"});
    }

    const newUser = new User({username, password, email});
    await newUser.save();

    const token = newUser.generateAuthToken();

    res.status(201).json({token, user: {id: newUser._id, username: newUser.username, email: newUser.email}});

  } catch (error){
    console.error("Registration error:", error);
    res.status(500).json({message: "Server error"});
  }
}