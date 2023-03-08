import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-comp',
  templateUrl: './date-time-comp.component.html',
  styleUrls: ['./date-time-comp.component.scss']
})
export class DateTimeCompComponent implements OnInit {
  currentDateTime = new Date();

  constructor() { }

  ngOnInit(): void {
    this.currentDateTimeUpdate();
  }

  currentDateTimeUpdate(): void {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

}
