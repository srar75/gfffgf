import express from 'express';
import bodyParser from 'body-parser';
import { router as apiRouter } from './api';
import { connectDatabase } from './utils/database';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connectDatabase();

// Routes
app.use('/api', apiRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});