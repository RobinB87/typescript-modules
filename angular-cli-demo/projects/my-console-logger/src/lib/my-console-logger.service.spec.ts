import { TestBed } from '@angular/core/testing';

import { MyConsoleLoggerService } from './my-console-logger.service';
import { LoggerConfig } from './logger.config';

describe('MyConsoleLoggerService', () => {
  let service: MyConsoleLoggerService;

  const loggerConfig: LoggerConfig = {
    appPrefix: 'anything',
    isProduction: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LoggerConfig,
          useValue: loggerConfig,
        },
      ],
    });

    service = TestBed.inject(MyConsoleLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
