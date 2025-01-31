const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting form. Please try again.' });
}
});

module.exports = router;

