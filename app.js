// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
//const otpRoutes = require('./routes/otpRoutes');
const admin=require('./routes/admin');
const superadmin=require('./routes/superadminRoutes')



//const { connectDB } = require('./db');
const cors = require('cors');
const app = express();
const path = require('path');

// Connect to the database fghh
//connectDB();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// Middleware to parse JSON bodies
app.use(cors())

//app.use(
  //cors({
    //origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO,process.env.FRONTEND_URL_THREE],
   // method: ["GET", "POST", "DELETE", "PUT"],
  //  credentials: true,
 // })
//);
// CORS Configuration




app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
app.use('/api', userRoutes);
//app.use('/api/v1/', otpRoutes);
app.use('/api/v2/superadmin',superadmin);
app.use('/api',admin);




//TESTING PURPOSE 
app.get('/',(req,res,next)=>{
    res.send("Hello , this is api for kirush laundry serives test for Docker.file");
    console.log("ots services");
     })
 http://localhost:3001/api/company/null
 app.get('/api/company/null',(req,res,next)=>{
    res.send("Hello , this is api for ots serives");
    console.log("ots services");
    
 })

 app.use(express.static('uploads'))
// Start the server
const PORT = process.env.PORT ||3021;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
