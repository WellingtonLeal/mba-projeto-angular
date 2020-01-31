import { PacienteService } from './paciente.service';
import { Paciente } from "../model-paciente/paciente";
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class PacienteResolve implements Resolve<Paciente> {
    constructor(private pacienteService: PacienteService) {}
  
    resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Paciente> | Paciente {
      const id = route.paramMap.get('id');
      if (id) {
        return this.pacienteService.consultar(id);
      }
      return new Paciente();
  
    }
  
  }
  