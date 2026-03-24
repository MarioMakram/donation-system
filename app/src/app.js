require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const donationRoutes = require('./routes/donationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());

// logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// routes
app.use('/', donationRoutes);

// health check
app.get('/', (req, res) => {
  res.send('Donation API is running 🚀');
});


// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  })
  .finally(() => {
    // 🚀 مهم: تشغيل السيرفر مهما حصل في Mongo
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
