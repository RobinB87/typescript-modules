import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLoginModule } from 'my-login';
import { MyConsoleLoggerModule } from 'my-console-logger';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
