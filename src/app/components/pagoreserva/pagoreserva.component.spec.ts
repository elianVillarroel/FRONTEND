import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoreservaComponent } from './pagoreserva.component';

describe('PagoreservaComponent', () => {
  let component: PagoreservaComponent;
  let fixture: ComponentFixture<PagoreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoreservaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
