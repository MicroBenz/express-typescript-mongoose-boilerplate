import { Express } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

export default function registerCommonMiddleware(app: Express) {
  app.use(bodyParser());
  app.use(cors({
    origin: [
      /localhost(:\d+)?$/,
    ],
    exposedHeaders: ['Content-Disposition'],
    credentials: true,
  }));
  app.use(helmet());
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(morgan(
    process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  ));
  app.use(cookieParser());
}
