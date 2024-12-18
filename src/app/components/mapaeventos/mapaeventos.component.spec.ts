import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaeventosComponent } from './mapaeventos.component';

describe('MapaeventosComponent', () => {
  let component: MapaeventosComponent;
  let fixture: ComponentFixture<MapaeventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaeventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaeventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
