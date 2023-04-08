import HttpError from './httpError';

const INTERNAL_SERVER_ERROR = (description: string) => {
  return new HttpError({
    status: 500,
    message: 'Internal server error',
    code: 'server-001',
    description,
  });
};

export { INTERNAL_SERVER_ERROR };
