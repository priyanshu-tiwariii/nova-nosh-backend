import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Import routes
import authRoute from './routes/auth.routes.js';
import addressRoute from './routes/address.routes.js';
import menuRoute from './routes/menu.routes.js';
import whistListRouter from './routes/whistList.routes.js';
import cartRoute from './routes/cart.routes.js';
import paymentRoute from './routes/payment.routes.js';
import orderRoute from './routes/order.routes.js';
import tableRoute from './routes/table.routes.js';
import contactRoute from './routes/contact.routes.js';

// Use routes
app.use('/api/test', (req, res) => {
  res.send('API is working properly');
});
app.use('/api/auth', authRoute);
app.use('/api/add', addressRoute);
app.use('/api/menu', menuRoute);
app.use('/api/whistList', whistListRouter);
app.use('/api/cart', cartRoute);
app.use('/api/payment', paymentRoute);
app.use('/api/order', orderRoute);
app.use('/api/table', tableRoute);
app.use('/api/contact', contactRoute);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;