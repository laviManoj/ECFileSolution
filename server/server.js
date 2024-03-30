const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./router/userRoutes');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://traveller:Manoj123@traveller.ots9ysb.mongodb.net/ECFileSolution', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected successfully!'))
.catch(err => console.error('Database connection error:', err));

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
