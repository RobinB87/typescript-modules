import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyConsoleLoggerModule } from 'my-console-logger';
import { MyLoginModule } from 'my-login';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MyConsoleLoggerModule.forRoot({
      isProduction: environment.production,
      appPrefix: 'consumerApp',
    }),
    MyLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
