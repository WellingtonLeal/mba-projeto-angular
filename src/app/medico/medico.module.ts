import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MedicoRoutingModule} from './medico-routing.module';
import { ListarMedicoComponent } from './components/listar-medico/listar-medico.component';
import { EditarMedicoComponent } from './components/editar-medico/editar-medico.component';
import { DiretivaMedicoComponent } from './components/diretiva-medico/diretiva-medico.component';
import { PipeMedicoComponent } from './components/pipe-medico/pipe-medico.component';
import { NgContentMedicoComponent } from './components/ng-content-medico/ng-content-medico.component';

@NgModule({
  declarations: [
    ListarMedicoComponent,
    EditarMedicoComponent,
    DiretivaMedicoComponent,
    PipeMedicoComponent,
    NgContentMedicoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MedicoRoutingModule,
    SharedModule
  ]
})
export class MedicoModule { }
