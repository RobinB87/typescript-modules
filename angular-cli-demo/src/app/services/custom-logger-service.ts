import { AbstractLoggerService } from 'my-console-logger';

const BASE_MESSAGE = 'Hello from CustomLoggerService: ';

export class CustomLoggerService implements AbstractLoggerService {
  warn(message: string) {
    console.warn(`${BASE_MESSAGE}: ${message}`);
  }
  error(message: string) {
    console.error(`${BASE_MESSAGE}: ${message}`);
  }
  info(message: string) {
    console.info(`${BASE_MESSAGE}: ${message}`);
  }
}
