import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgContentPacienteComponent } from './components/ng-content-paciente/ng-content-paciente.component';
import { PipePacienteComponent } from './components/pipe-paciente/pipe-paciente.component';
import { DiretivaPacienteComponent } from './components/diretiva-paciente/diretiva-paciente.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PacienteRoutingModule} from './paciente-routing.module';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';



@NgModule({
  declarations: [
    ListarPacienteComponent,
    EditarPacienteComponent,
    DiretivaPacienteComponent,
    PipePacienteComponent,
    NgContentPacienteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    PacienteRoutingModule,
    SharedModule, 
  ]
})
export class PacienteModule { }
