import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacioneventosComponent } from './aprobacioneventos.component';

describe('AprobacioneventosComponent', () => {
  let component: AprobacioneventosComponent;
  let fixture: ComponentFixture<AprobacioneventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprobacioneventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobacioneventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
