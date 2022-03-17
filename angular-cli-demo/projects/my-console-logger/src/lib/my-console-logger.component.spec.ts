import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConsoleLoggerComponent } from './my-console-logger.component';

describe('MyConsoleLoggerComponent', () => {
  let component: MyConsoleLoggerComponent;
  let fixture: ComponentFixture<MyConsoleLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyConsoleLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConsoleLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
