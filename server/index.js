import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js';
import drawingRoutes from './routes/drawing.route.js';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', (req,res) => {
  res.send("Hello World!");
})

app.use('/api/auth', authRoutes);
app.use('/api/drawings', drawingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})