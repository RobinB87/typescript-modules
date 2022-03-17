import { Injectable } from '@angular/core';
import { LoggerConfig } from './logger.config';

@Injectable({
  providedIn: 'root',
})
export class MyConsoleLoggerService {
  constructor(private loggerConfig: LoggerConfig) {}

  warn(message: string) {
    if (this.loggerConfig.isProduction) return;

    console.warn(`${this.loggerConfig.appPrefix}: ${message}`);
  }
  error(message: string) {
    console.error(`${this.loggerConfig.appPrefix}: ${message}`);
  }
  info(message: string) {
    if (this.loggerConfig.isProduction) return;

    console.info(`${this.loggerConfig.appPrefix}: ${message}`);
  }
}
