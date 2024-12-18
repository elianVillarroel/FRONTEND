import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinregistroComponent } from './finregistro.component';

describe('FinregistroComponent', () => {
  let component: FinregistroComponent;
  let fixture: ComponentFixture<FinregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinregistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
