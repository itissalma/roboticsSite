import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBoardPageComponent } from './high-board-page.component';

describe('HighBoardPageComponent', () => {
  let component: HighBoardPageComponent;
  let fixture: ComponentFixture<HighBoardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighBoardPageComponent]
    });
    fixture = TestBed.createComponent(HighBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
