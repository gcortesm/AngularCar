import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarMecanicoComponent } from './asignar-mecanico.component';

describe('AsignarMecanicoComponent', () => {
  let component: AsignarMecanicoComponent;
  let fixture: ComponentFixture<AsignarMecanicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarMecanicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
