const mongose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    HasAdminAccess: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'superadmin', 'storekeeper', 'salesperson'], //Define the allowed roles
        default: 'user'
    },

     //Date ctreated and updated at

},
{timestamps: true}
);

//create model from schema
const User = mongose.model('User', userSchema);

module.exports = User; //export the model to be used in other files

