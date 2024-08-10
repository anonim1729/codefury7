const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const colors = require('colors');
const Authrouter=require('./routes/Authrouter.js');
const DisasterRouter=require('./routes/Disaster.js');

// env variables
dotenv.config({ path: './config/.env' });

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());

// DB connection
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("DB connection successful".blue);
    })
    .catch((err) => {
        console.error(`DB connection error: ${err.message}`.red);
    })

// routes
app.get('/', (req, res) => {
    res.end('Hello World!');
})
app.use('/auth',Authrouter);
app.use('/disaster',DisasterRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.magenta);
});
