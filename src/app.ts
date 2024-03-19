import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import urlRouter from './routes/url.router';

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: '16kb' }));
app.use(
  express.urlencoded({
    extended: true,
    limit: '16kb',
  })
);
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'ejs');
// routes declare
app.use('/api/v1', urlRouter);

export { app };
