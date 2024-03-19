import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import urlRouter from './routes/url.router';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

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
