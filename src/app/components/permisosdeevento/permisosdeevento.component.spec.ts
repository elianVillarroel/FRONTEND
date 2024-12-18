import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosdeeventoComponent } from './permisosdeevento.component';

describe('PermisosdeeventoComponent', () => {
  let component: PermisosdeeventoComponent;
  let fixture: ComponentFixture<PermisosdeeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisosdeeventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisosdeeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
