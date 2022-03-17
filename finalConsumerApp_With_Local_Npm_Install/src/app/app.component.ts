import { Component, OnInit } from '@angular/core';
import { MyConsoleLoggerService } from 'my-console-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'finalConsumerApp_With_Local_Npm_Install';

  constructor(private _logger: MyConsoleLoggerService) {}

  ngOnInit(): void {
    this._logger.info('hello from the library to the consumer!');
  }
}
