import { Component } from '@angular/core';
import { MyConsoleLoggerService } from 'my-console-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-cli-demo';

  constructor(private readonly loggingService: MyConsoleLoggerService) {}

  logInfo() {
    this.loggingService.info('howdy!');
  }

  logError() {
    this.loggingService.error('THIS IS AN ERRORRRRR!');
  }
}
