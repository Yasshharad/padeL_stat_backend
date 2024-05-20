const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.json({ message: 'Hello from Express running in Netlify Functions!' });
});

module.exports = router;
