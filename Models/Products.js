const mongose = require('mongoose');
const productSchema = new mongose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }

},

{timestamps: true}
    
);

//create model from schema
const Product = mongose.model('Product', productSchema);

module.exports = Product; //export the model to be used in other files
