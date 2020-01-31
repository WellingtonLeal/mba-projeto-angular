import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-medico',
  templateUrl: './diretiva-medico.component.html',
  styleUrls: ['./diretiva-medico.component.scss']
})
export class DiretivaMedicoComponent implements OnInit {
  cor: string;
  tempo: number;

  constructor() { }

  ngOnInit() {
  }

  alerta(valor) {
    alert(valor);
  }
}
