import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerConfig } from './logger.config';

import { MyConsoleLoggerComponent } from './my-console-logger.component';

@NgModule({
  declarations: [MyConsoleLoggerComponent],
  imports: [],
  exports: [MyConsoleLoggerComponent],
})
export class MyConsoleLoggerModule {
  static forRoot(
    config: LoggerConfig
  ): ModuleWithProviders<MyConsoleLoggerModule> {
    return {
      ngModule: MyConsoleLoggerModule,
      providers: [{ provide: LoggerConfig, useValue: config }],
    };
  }
}
