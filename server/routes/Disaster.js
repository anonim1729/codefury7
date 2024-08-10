const { Router } = require('express');
const router = Router();
const Disaster = require('../models/Disater'); // Update the path accordingly

// Get all disasters or filter by location query
router.get("/", async (req, res) => {
    try {
        const { location } = req.query;
        let disasters;

        if (location) {
            disasters = await Disaster.find({ location: new RegExp(location, 'i') }).sort({ occuredOn: -1 });
        } else {
            disasters = await Disaster.find().sort({ occuredOn: -1 });
        }

        res.status(200).json(disasters);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// router.get("/past",(req,res)=>{

// })

// Create a new disaster
router.post("/new", async (req, res) => {
    try {
        console.log(req.body);
        const newDisaster = new Disaster(req.body);
        await newDisaster.save();
        res.status(201).json(newDisaster);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Patch (update) the data of a disaster by ID
router.patch("/:id", async (req, res) => {
    try {
        const updatedDisaster = await Disaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDisaster) {
            return res.status(404).json({ message: 'Disaster not found' });
        }
        res.status(200).json(updatedDisaster);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get individual disaster data by ID
router.get("/:id", async (req, res) => {
    try {
        const disaster = await Disaster.findById(req.params.id);
        if (!disaster) {
            return res.status(404).json({ message: 'Disaster not found' });
        }
        res.status(200).json(disaster);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
