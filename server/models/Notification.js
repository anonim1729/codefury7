const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    enum: ['Bengaluru', 'Mumbai', 'Hyderabad', 'Delhi'], 
  },
  message: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  messagedAt: {
    type: Date,
    default: Date.now
  },
}, { timestamps: true }); 
module.exports = mongoose.model('Notification', NotificationSchema);
