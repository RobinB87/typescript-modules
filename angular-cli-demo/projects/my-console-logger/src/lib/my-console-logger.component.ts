import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-console-logger',
  template: `
    <p>
      my-console-logger works!
    </p>
  `,
  styles: [
  ]
})
export class MyConsoleLoggerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
