import { PacienteResolve } from './service-paciente/paciente.resolve';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';



const routes: Routes = [
  {
    component: ListarPacienteComponent,
    path: '',
  },
  {
    component: EditarPacienteComponent,
    path: 'cadastroPaciente',
    resolve: {
      paciente: PacienteResolve,
    }
  },
  {
    component: EditarPacienteComponent,
    path: 'editarPaciente/:id',
    resolve: {
      paciente: PacienteResolve
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
