import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEventoPresiComponent } from './ver-evento-presi.component';

describe('VerEventoPresiComponent', () => {
  let component: VerEventoPresiComponent;
  let fixture: ComponentFixture<VerEventoPresiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerEventoPresiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEventoPresiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
