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

  it('should call warn when production is false', () => {
    const myService = new MyConsoleLoggerService({
      appPrefix: 'anything',
      isProduction: false,
    });

    const spy = spyOn(console, 'warn');
    myService.warn('this is a test');

    expect(spy).toHaveBeenCalled();
  });

  it('should NOT call warn when production is true', () => {
    const myService = new MyConsoleLoggerService({
      appPrefix: 'anything',
      isProduction: true,
    });

    const spy = spyOn(console, 'warn');
    myService.warn('this is a test');

    expect(spy).not.toHaveBeenCalled();
  });

  it('logged message should have defined prefix', () => {
    const myService = new MyConsoleLoggerService({
      appPrefix: 'anything',
      isProduction: false,
    });

    const spy = spyOn(console, 'info');
    myService.info('this is a test');

    expect(spy).toHaveBeenCalledWith('anything: this is a test');
  });
});
