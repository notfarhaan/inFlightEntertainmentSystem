import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(cors()); 
app.use(bodyParser.json()); 

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/inFlightEntertainmentDB'; 
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

//  Passenger Schema 
const passengerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  food: { type: [String], default: [] },  
  total: { type: String, default: '₹ 0' },  
});

const Passenger = mongoose.model('Passenger', passengerSchema);

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const passenger = await Passenger.findOne({ username });

    if (passenger && passenger.password === password) {
      res.status(200).json({ message: 'Login successful', username: passenger.username });
    } else {
      res.status(400).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// route to fetch food data and total for the logged-in user
app.get('/api/user/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const passenger = await Passenger.findOne({ username });

    if (passenger) {
      res.status(200).json({ food: passenger.food, total: passenger.total });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error('Error fetching user food data:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
