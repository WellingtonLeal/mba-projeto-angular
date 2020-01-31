import {Component, Input, OnInit} from '@angular/core';
import {Medico} from '../../model-medico/medico';

@Component({
  selector: 'app-pipe-medico',
  templateUrl: './pipe-medico.component.html',
  styleUrls: ['./pipe-medico.component.scss']
})
export class PipeMedicoComponent implements OnInit {
  valor: number;
  multiplicador: number;
  data = new Date();
  @Input()
  medicos: Medico[];

  filtro: string;

  numeros: number[] = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
