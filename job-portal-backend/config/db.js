const mongoose = require('mongoose');
require('dotenv').config();
// process.env.PORT=5000
// process.env.MONGO_URI="mongodb+srv://nilesheceuitbu:NileshECE123@cluster0.iosao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// // process.env.JWT_SECRET=supersecretkey
// // process.env.SESSION_SECRET=kjvajkbd
const connectDB = async () => {
    try {
        console.log("Mongo URI: ", process.env.MONGO_URI);  // Log the Mongo URI
        const conn = await mongoose.connect(process.env.MONGO_URI, 
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};


module.exports = connectDB;
