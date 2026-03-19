const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");


router.get("/", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});


router.post("/", async (req, res) => {
  console.log("Incoming:", req.body);

  try {
    const lead = new Lead(req.body);
    const saved = await lead.save();
    res.json(saved);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updated = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;