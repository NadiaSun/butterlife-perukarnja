import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMessengerComponent } from './popup-messenger.component';

describe('PopupMessengerComponent', () => {
  let component: PopupMessengerComponent;
  let fixture: ComponentFixture<PopupMessengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMessengerComponent]
    });
    fixture = TestBed.createComponent(PopupMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
