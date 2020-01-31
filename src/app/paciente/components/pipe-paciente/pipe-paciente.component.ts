import {Component, Input, OnInit} from '@angular/core';
import { Paciente } from "../../model-paciente/paciente";

@Component({
  selector: 'app-pipe-paciente',
  templateUrl: './pipe-paciente.component.html',
  styleUrls: ['./pipe-paciente.component.scss']
})
export class PipePacienteComponent implements OnInit {
  valor: number;
  multiplicador: number;
  data = new Date();
  @Input()
  pacientes: Paciente[];

  filtro: string;

  numeros: number[] = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
