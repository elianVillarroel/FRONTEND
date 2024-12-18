import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidoadminComponent } from './bienvenidoadmin.component';

describe('BienvenidoadminComponent', () => {
  let component: BienvenidoadminComponent;
  let fixture: ComponentFixture<BienvenidoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienvenidoadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
