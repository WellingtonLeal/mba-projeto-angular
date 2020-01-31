import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../../shared/base-api.service';
import { Paciente } from '../model-paciente/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseApiService<Paciente> {
  constructor(HttpClient: HttpClient) {
    super(HttpClient, 'pacientes');
   }
}
