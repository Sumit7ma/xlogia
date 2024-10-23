const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = 8080; // Using a fixed port

app.use(cors());
app.use(bodyParser.json());
app.use('/api', employeeRoutes);

// Replace 'your_mongodb_uri_here' with your actual MongoDB URI
mongoose.connect('mongodb://127.0.0.1:27017/xlogia', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is properly working on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
