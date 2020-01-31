import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicoResolve} from './service-medico/medico.resolve';
import { ListarMedicoComponent } from './components/listar-medico/listar-medico.component';
import { EditarMedicoComponent } from './components/editar-medico/editar-medico.component';


const routes: Routes = [
  {
    component: ListarMedicoComponent,
    path: '',
  },
  {
    component: EditarMedicoComponent,
    path: 'cadastroMedico',
    resolve: {
      medico: MedicoResolve,
    }
  },
  {
    component: EditarMedicoComponent,
    path: 'editarMedico/:id',
    resolve: {
      medico: MedicoResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
