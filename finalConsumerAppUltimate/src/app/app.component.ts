import { Component, OnInit } from '@angular/core';
import { MyConsoleLoggerService } from '@robinb87/my-console-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'finalConsumerApp_With_NPM_Pack';

  constructor(private _logger: MyConsoleLoggerService) {}

  ngOnInit(): void {
    this._logger.info('hello from the library to the consumer!');
  }
}
