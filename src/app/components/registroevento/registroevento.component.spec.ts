import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroeventoComponent } from './registroevento.component';

describe('RegistroeventoComponent', () => {
  let component: RegistroeventoComponent;
  let fixture: ComponentFixture<RegistroeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroeventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
