import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiretivaMedicoComponent } from './diretiva-medico.component';

describe('DiretivaMedicoComponent', () => {
  let component: DiretivaMedicoComponent;
  let fixture: ComponentFixture<DiretivaMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
