import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidopersonaComponent } from './bienvenidopersona.component';

describe('BienvenidopersonaComponent', () => {
  let component: BienvenidopersonaComponent;
  let fixture: ComponentFixture<BienvenidopersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienvenidopersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
