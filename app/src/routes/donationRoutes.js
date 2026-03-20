const express = require('express');
const router = express.Router();
const { createDonation, getDonations } = require('../controllers/donationController');

router.post('/donate', createDonation);
router.get('/donations', getDonations);

module.exports = router;
