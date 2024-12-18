import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QreventosComponent } from './qreventos.component';

describe('QreventosComponent', () => {
  let component: QreventosComponent;
  let fixture: ComponentFixture<QreventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QreventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QreventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
