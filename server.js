const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse URL-encoded bodies for form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files 
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
        return res.status(400).send('Please fill in all fields.');
    }


    // Response
    res.status(200).send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
