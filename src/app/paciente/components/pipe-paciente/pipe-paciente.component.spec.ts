import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PipePacienteComponent } from './pipe-paciente.component';

describe('PipePacienteComponent', () => {
  let component: PipePacienteComponent;
  let fixture: ComponentFixture<PipePacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
