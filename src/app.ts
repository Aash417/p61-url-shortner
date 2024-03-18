import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import urlRouter from './routes/url.router';
const app: Express = express();
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

// routes declare
app.use('/api/v1', urlRouter);

export { app };
