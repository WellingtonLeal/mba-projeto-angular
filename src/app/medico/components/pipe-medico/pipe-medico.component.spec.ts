import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PipeMedicoComponent } from './pipe-medico.component';

describe('PipeMedicoComponent', () => {
  let component: PipeMedicoComponent;
  let fixture: ComponentFixture<PipeMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
