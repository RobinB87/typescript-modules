import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuperLibModule } from 'super-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SuperLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
