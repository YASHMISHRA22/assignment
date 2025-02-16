const express = require('express');
const connectDB = require('./db/db');
const userRoutes = require('./routes/userRoute');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
