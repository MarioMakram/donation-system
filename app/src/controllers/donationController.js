const Donation = require('../models/Donation');

exports.createDonation = async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
