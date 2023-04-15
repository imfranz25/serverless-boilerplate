import express, { Application } from 'express';
import serverless from 'serverless-http';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import appConfig from './infra/configs';

/* Controllers & Routes */
import { errorController } from './controllers';
import { productRouter } from './routes';

/* App + dotEnv init */
const app: Application = express();

/* Express middleware(s) */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

/* Set various HTTP headers using Helmet */
if (appConfig.ENVIRONMENT !== 'development') {
  app.use(helmet());
}

/* Root route */
app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Head Start Commerce',
  });
});

/* Use Routes */
app.use('/products', productRouter);

/* 404 Error Route */
app.use('*', (req, res) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

/* Server Error Route */
app.use(errorController.serverError);

/* Run in a node server */
if (appConfig.ENVIRONMENT === 'development') {
  app.listen(appConfig.PORT, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Server running @ PORT ${appConfig.PORT}`);
  });
}

/* For serverless deployment */
export const handler = serverless(app);
