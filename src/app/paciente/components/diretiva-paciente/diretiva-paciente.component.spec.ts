import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DiretivaPacienteComponent } from './diretiva-paciente.component';

describe('DiretivaPacienteComponent', () => {
  let component: DiretivaPacienteComponent;
  let fixture: ComponentFixture<DiretivaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
