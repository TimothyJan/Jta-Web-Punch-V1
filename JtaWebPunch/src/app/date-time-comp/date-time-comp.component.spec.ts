import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeCompComponent } from './date-time-comp.component';

describe('DateTimeCompComponent', () => {
  let component: DateTimeCompComponent;
  let fixture: ComponentFixture<DateTimeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimeCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTimeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
