import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwTableComponent } from './rw-table.component';

describe('RwTableComponent', () => {
  let component: RwTableComponent;
  let fixture: ComponentFixture<RwTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RwTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RwTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
