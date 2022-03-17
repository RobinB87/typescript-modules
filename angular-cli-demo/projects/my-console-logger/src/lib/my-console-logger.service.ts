import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyConsoleLoggerService {
  warn(message: string) {
    console.warn('custom warn: ' + message);
  }
  error(message: string) {
    console.error('custom error: ' + message);
  }
  info(message: string) {
    console.info('custom info: ' + message);
  }

  constructor() {}
}
