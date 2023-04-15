import { ErrorRequestHandler } from 'express';

/* eslint-disable-next-line no-unused-vars */
const serverError: ErrorRequestHandler = (error, req, res, _next) => {
  console.error(error);

  return res.status(404).json({
    error: 'Server Error',
  });
};

export default { serverError };
