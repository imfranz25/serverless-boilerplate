import HttpError from './httpError';

const INVALID_REQUEST = (description: string) => {
  return new HttpError({
    status: 400,
    message: 'Invalid request',
    code: 'client-001',
    description,
  });
};

export { INVALID_REQUEST };
