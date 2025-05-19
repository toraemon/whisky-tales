import express from 'express';
import whiskiesRoute from './routes/whiskiesRoute';

const app = express();
app.use(express.json());

app.use('/whiskies', whiskiesRoute);

export default app;