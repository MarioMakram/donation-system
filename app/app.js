const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema
const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const Donation = mongoose.model('Donation', donationSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Donation API is running 🚀');
});

app.post('/donate', async (req, res) => {
  try {
    const { name, amount } = req.body;

    const donation = new Donation({ name, amount });
    await donation.save();

    res.send(donation);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/donations', async (req, res) => {
  const donations = await Donation.find();
  res.send(donations);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
