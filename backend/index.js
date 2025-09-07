const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http'); // ✅

const Authrouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use('/auth', Authrouter);
app.use('/products', ProductRouter);

// ❌ Do not use app.listen()
// ✅ Instead, export the serverless-wrapped app
module.exports = serverless(app);
