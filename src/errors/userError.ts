import HttpError from './httpError';

const UNAUTHORIZED = (description: string) => {
  return new HttpError({
    status: 401,
    message: 'Unauthorized',
    code: 'user-001',
    description,
  });
};

const FORBIDDEN = (description: string) => {
  return new HttpError({
    status: 403,
    message: 'Forbidden',
    code: 'user-002',
    description,
  });
};

const USER_NOT_FOUND = (description: string) => {
  return new HttpError({
    status: 404,
    message: 'User not found',
    code: 'user-003',
    description,
  });
};

const USER_VALIDATION_FAILED = (description: string) => {
  return new HttpError({
    status: 422,
    message: 'Validation failed',
    code: 'user-006',
    description,
  });
};

export { UNAUTHORIZED, FORBIDDEN, USER_NOT_FOUND, USER_VALIDATION_FAILED };
