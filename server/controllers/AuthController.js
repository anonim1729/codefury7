const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email,password);
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    user = new User({ email: email, password: hashedPwd });
    await user.save();

    const payload = { user: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2m' });

    res.status(201).json({ user,token});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email,password);
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist, please signup" });
    }
    // console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }
    const payload = { user: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2m' });

    res.status(200).json({ user,token });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Access denied, no token provided.' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  };
const getuser=async(req,res)=>{
    try {
        const user = await User.findById(req.user.user);
        res.status(200).json({ user });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching user data' });
      }
}
const signout = (req, res) => {
  res.json({ message: 'Signed out successfully' });
};

module.exports = { signin, signup, signout,verifyToken,getuser };
