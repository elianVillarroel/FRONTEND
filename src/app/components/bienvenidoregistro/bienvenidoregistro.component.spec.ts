import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidoregistroComponent } from './bienvenidoregistro.component';

describe('BienvenidoregistroComponent', () => {
  let component: BienvenidoregistroComponent;
  let fixture: ComponentFixture<BienvenidoregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienvenidoregistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidoregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
