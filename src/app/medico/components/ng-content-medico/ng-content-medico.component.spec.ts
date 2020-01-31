import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgContentMedicoComponent } from './ng-content-medico.component';

describe('NgContentMedicoComponent', () => {
  let component: NgContentMedicoComponent;
  let fixture: ComponentFixture<NgContentMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
