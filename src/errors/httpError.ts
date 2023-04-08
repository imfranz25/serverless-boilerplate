import { HttpErrorProps } from '../interfaces/error.interface';

class HttpError {
  status;
  message;
  code;
  description;

  constructor({ status, message, code, description }: HttpErrorProps) {
    this.status = status;
    this.message = message;
    this.code = code;
    this.description = description;
  }
}

export default HttpError;
