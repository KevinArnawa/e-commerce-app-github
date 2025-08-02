require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json()); // Middleware untuk parsing JSON body

// Rute dasar
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API!');
});

// Rute untuk setiap modul akan ditambahkan di sini

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);