import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwCardsComponent } from './rw-cards.component';

describe('RwCardsComponent', () => {
  let component: RwCardsComponent;
  let fixture: ComponentFixture<RwCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RwCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RwCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
