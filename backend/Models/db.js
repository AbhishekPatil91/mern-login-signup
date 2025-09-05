const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

if (!uri) {
    console.error("ERROR: MONGO_URI is not defined in .env file");
    process.exit(1); // Stop server if URI is missing
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error: ', err));
