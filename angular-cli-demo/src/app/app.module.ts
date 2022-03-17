import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLoginModule } from 'my-login';
import {
  MyConsoleLoggerModule,
  MyConsoleLoggerService,
} from 'my-console-logger';
import { CustomLoggerService } from './services/custom-logger-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLoginModule,
    MyConsoleLoggerModule.forRoot({
      isProduction: false,
      appPrefix: 'ROBINB87',
    }),
  ],
  providers: [
    { provide: MyConsoleLoggerService, useClass: CustomLoggerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
