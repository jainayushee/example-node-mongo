require('dotenv').config()
const express = require('express');
const app = express();  
const mongoose = require('mongoose');
const corsMiddleware = require('./api/cors');
//Database
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.once('open', () => console.log('Connected to Database'))
db.on('error', (error) => console.log(error))

//Enabling CORS
app.use(corsMiddleware)

//Route
const subscribersRouter = require('./api/routes/blogPosts')
app.use( subscribersRouter)

//Middleware
app.use(express.json())

//PORT 
app.listen( process.env.PORT, () =>{
  console.log(`Listening on port ${process.env.PORT}`);
})