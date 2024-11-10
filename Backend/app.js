// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const donorRoutes = require('./routes/donorRoutes');
const collectionRoutes = require('./routes/collectionRoutes'); 
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: 'GET,POST', // Allow specific HTTP methods
  allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
}));

app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/donors', donorRoutes);
app.use('/api/collections', collectionRoutes);
// MongoDB connection
require('./db/connection');
// Server listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

































// const express=require('express')
// const morgan=require('morgan')
// const app= new express()
// const cors = require('cors');

// const donorRoutes = require('./routes/donorRoutes');
// app.use(morgan('dev'));
 
// //adminRoutes

// //donateRoutes
// app.use('/api/donors', donorRoutes);
// //collectionRoutes


// require('dotenv').config();
// const PORT=process.env.PORT;
// require('./db/connection');



// app.listen(PORT, ()=>{
//     console.log(`server is running on Port ${PORT}`)
// })