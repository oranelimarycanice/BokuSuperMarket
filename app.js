const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/databaseConfig');
const app = express();
const productRoutes = require('./Routes/ProductRoute');
const userRoutes = require('./Routes/UserRoute');

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to mongoDB

app.use(express.json()); //middleware to parse JSON request bodies
app.use('/users', userRoutes); 




app.use('/products', productRoutes); // Use the product routes for any requests starting with /products
app.use('/users', userRoutes); // Use the user routes for any requests starting with /users


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
