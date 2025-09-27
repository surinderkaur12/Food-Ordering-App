import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/foodordering')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error', err));

// ✅ Schema and Login route
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

app.post('/api/v1/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: `✅ Welcome, ${username}` });
  } catch (err) {
    res.status(400).json({ message: '❌ Failed to login', error: err.message });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



// ✅ Contact Schema & Route
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  altPhone: String,
  flat: String,
  street: String,
  city: String,
  state: String,
  pincode: String,
  addressType: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  try {
    const contactData = req.body;
    const newContact = new Contact(contactData);
    await newContact.save();
    res.status(201).json({ message: '✅ Contact info saved successfully' });
  } catch (err) {
    console.error('❌ Error saving contact:', err.message);
    res.status(500).json({ message: '❌ Failed to save contact info', error: err.message });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



// ✅ Subscriber Schema & Route
const subscriberSchema = new mongoose.Schema({
  subscriber: {
    type: String,
    required: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

app.post('/api/subscribe', async (req, res) => {
  const { subscriber } = req.body;
  if (!subscriber) {
    return res.status(400).json({ success: false, message: 'Subscriber field is required' });
  }

  try {
    const newSubscriber = new Subscriber({ subscriber });
    await newSubscriber.save();
    res.status(200).json({ success: true, message: '✅ Subscribed successfully' });
  } catch (err) {
    console.error('❌ Subscription error:', err.message);
    res.status(500).json({ success: false, message: '❌ Subscription failed', error: err.message });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});