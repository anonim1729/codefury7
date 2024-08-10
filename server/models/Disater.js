const mongoose = require('mongoose');
const { Schema } = mongoose;

const disasterSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum:["Earthquake","Flood","Tsunami","Cyclone","Landslide","Cloudburst","Forest Fire"]
  },
  occuredOn: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  severity: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  damageCost: {
    type: Number,
    min: 0,
  },
  casualties: {
    type: Number,
    default: 0,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  coordinates: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    }
  }
  
}, { timestamps: true });


const Disaster = mongoose.model('Disaster', disasterSchema);

module.exports = Disaster;
