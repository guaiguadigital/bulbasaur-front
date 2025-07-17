import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPopup } from './chat-popup';

describe('ChatPopup', () => {
  let component: ChatPopup;
  let fixture: ComponentFixture<ChatPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
