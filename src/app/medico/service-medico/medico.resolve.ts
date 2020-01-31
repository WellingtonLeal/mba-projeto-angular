import { Injectable } from '@angular/core';
import {Medico} from '../model-medico/medico';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MedicoService} from './medico.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoResolve implements Resolve<Medico> {
  constructor(private medicoService: MedicoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Medico> | Medico {
    const id = route.paramMap.get('id');
    if (!id) {
      return new Medico();
    }
    return this.medicoService.consultar(id);

    //if (id) {
    //  return this.medicoService.consultar(id);
    //}
    //return new Medico();

  }
}


/* @Injectable({
  providedIn: 'root'
})
export class MedicoResolveService implements Resolve<Medico> {

  constructor(private medicoService: MedicosService) { }
  
  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Medico | Observable<Medico> {
      
      if (!route.queryParams) {
          return new Medico();
      }

      return this.medicoService.consultar(route.queryParams.id);
  }

}*/
