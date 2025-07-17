
// const express = require('express');


// const app = express();
// const port = 3001;


// app.get('/',(req,res)=>{
//     res.send("hi  from spiderman");

// })


// app.listen(port,()=>{
//     console.log("the server is  running on poert: 3001")
// })

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const venueRoutes = require('./routes/venueRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoutes);
app.use('/api', venueRoutes);
app.use('/api', bookingRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server started')))
  .catch(err => console.error(err));
