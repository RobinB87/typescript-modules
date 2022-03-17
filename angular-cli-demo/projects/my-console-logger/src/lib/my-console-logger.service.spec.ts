import { TestBed } from '@angular/core/testing';

import { MyConsoleLoggerService } from './my-console-logger.service';

describe('MyConsoleLoggerService', () => {
  let service: MyConsoleLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyConsoleLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
