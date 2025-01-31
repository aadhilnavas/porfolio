// // // // server.js
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const bodyParser = require('body-parser');
// // // const cors = require('cors');

// // // const app = express();
// // // const port = 5000;

// // // // Middleware
// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // Connect to MongoDB
// // // mongoose.connect('mongodb://localhost:27017/contactForm', { useNewUrlParser: true, useUnifiedTopology: true })
// // //   .then(() => console.log('MongoDB Connected'))
// // //   .catch(err => console.log('MongoDB connection error:', err));

// // // // Contact Form Schema
// // // const contactSchema = new mongoose.Schema({
// // //   name: String,
// // //   email: String,
// // //   message: String,
// // // });

// // // const Contact = mongoose.model('Contact', contactSchema);

// // // // POST Route to submit form data
// // // app.post('/submit-form', async (req, res) => {
// // //   const { name, email, message } = req.body;

// // //   const newContact = new Contact({
// // //     name,
// // //     email,
// // //     message,
// // //   });

// // //   try {
// // //     await newContact.save();
// // //     res.status(200).send('Form submitted successfully');
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).send('Error submitting form');
// // //   }
// // // });

// // // // Start server
// // // app.listen(port, () => {
// // //   console.log(`Server is running on http://localhost:${port}`);
// // // });



// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const app = express();

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // MongoDB Connection
// // mongoose
// //   .connect('mongodb://localhost:27017/contactForm', { useNewUrlParser: true })
// //   .then(() => console.log('MongoDB connected'))
// //   .catch((err) => console.log('MongoDB connection error:', err));

// // // Define a Schema
// // const contactSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   message: String,
// // });

// // const Contact = mongoose.model('Contact', contactSchema);

// // // POST Route
// // app.post('/contact', async (req, res) => {
// //   try {
// //     const { name, email, message } = req.body;
// //     const newContact = new Contact({ name, email, message });
// //     await newContact.save();
// //     res.status(201).json({ message: 'Contact saved successfully!' });
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to save contact.' });
// //   }
// // });

// // // Server Start
// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });


// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const contactRoutes = require('./routes/contactRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected!'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// // Routes
// app.use('/contact', contactRoutes);

// // Start Server
// app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/contactForm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/contact', contactRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
