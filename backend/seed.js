import mongoose from 'mongoose';

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/inFlightEntertainmentDB'; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const passengerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, 
  food: { type: [String], default: [] },  
  total: { type: String, default: '₹ 0' },  
});

const Passenger = mongoose.model('Passenger', passengerSchema);

// Hardcoded passenger details 
const seedPassengers = async () => {
  const passengers = [
    {
      username: 'Bobby',
      password: '123',
      food: ['Soda', 'Whiskey'],
      total: '₹ 2000',
    },
    {
      username: 'DJ',
      password: '123',
      food: ['Pasta', 'Water'],
      total: '₹ 750',
    },
    {
      username: 'Sam',
      password: '123',
      food: ['Coffee', 'Pringles'],
      total: '₹ 300',
    },
  ];

  try {
    await Passenger.insertMany(passengers);
    console.log('Sample passengers added to database');
    mongoose.connection.close();  
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedPassengers();
