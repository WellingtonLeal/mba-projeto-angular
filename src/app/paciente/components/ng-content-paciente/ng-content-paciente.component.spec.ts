import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgContentPacienteComponent } from './ng-content-paciente.component';

describe('NgContentPacienteComponent', () => {
  let component: NgContentPacienteComponent;
  let fixture: ComponentFixture<NgContentPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
