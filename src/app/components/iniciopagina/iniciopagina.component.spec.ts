import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopaginaComponent } from './iniciopagina.component';

describe('IniciopaginaComponent', () => {
  let component: IniciopaginaComponent;
  let fixture: ComponentFixture<IniciopaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciopaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciopaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
