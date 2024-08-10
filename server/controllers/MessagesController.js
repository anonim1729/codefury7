const Notification = require('../models/Notification.js');

const getAllMessages = async (req, res) => {
  try {
    const { location } = req.query;
    if (!location) {
      return res.status(400).json({ message: 'Location is required' });
    }

    const messages = await Notification.find({ location });
    if (messages.length === 0) {
      return res.status(200).json({});
    }

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addMessage = async (req, res) => {
  try {
    const { location, message, email } = req.body;
    
    if (!location || !message || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMessage = new Notification({
      location,
      message,
      email,
      messagedAt: Date.now(), 
    });

    await newMessage.save();
    res.status(201).json({ message: 'Notification added successfully', newMessage });
  } catch (error) {
    console.error('Error adding message:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllMessages, addMessage };
