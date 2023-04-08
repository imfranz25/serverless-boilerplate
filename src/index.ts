import { config } from 'dotenv';
import express, { Application } from 'express';
import serverless from 'serverless-http';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

/* Routes */
import { productRouter } from './routes';

const app: Application = express();
config();

/* Express middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Head Start Commerce',
  });
});

/* Use Routes */
app.use('/products', productRouter);

/* Error Route */
app.use((req, res) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

if (process.env.ENV === 'development') {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Server running @ PORT ${PORT}`);
  });
}

export const handler = serverless(app);
