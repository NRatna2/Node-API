const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type:String,
            require: [true, "Please enter a product name"]
        },
        description: { 
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true

        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        category: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
)


  
  
 
  
  

const Product = mongoose.model('Product', productSchema);

module.exports =  Product ;