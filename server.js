

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const productRoute = require ('./routes/productRoute');
const categoryRoute = require ('./routes/categoryRoute');
const { initializeCategories } = require('./models/categoryModel');

const app = express() 



app.use(express.json())
app.use(cors());
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);

app.get('/', (req, res)=>{
    res.send('Hello, Welcome to Marketplace Application')
})


  

  mongoose.connect('mongodb+srv://nratna2:Ratna4515@comp229.sj3dq3z.mongodb.net/Marketplace?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(3001, () => {
        console.log('Node API app is running on port 3001');
      });
    })
    .catch((error) => {
      console.log(error);
    });
  
  
  
  
  
  
  