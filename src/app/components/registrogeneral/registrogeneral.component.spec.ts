import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrogeneralComponent } from './registrogeneral.component';

describe('RegistrogeneralComponent', () => {
  let component: RegistrogeneralComponent;
  let fixture: ComponentFixture<RegistrogeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrogeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrogeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
