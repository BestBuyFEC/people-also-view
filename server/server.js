require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./pool');
const cors = require('cors')
app.use(cors())

app.get('/api/products', async (req,res) => {
    try {
        let data = await db.query('SELECT * FROM product')
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(process.env.PORT || 3025, () => {
    console.log('listening')
})