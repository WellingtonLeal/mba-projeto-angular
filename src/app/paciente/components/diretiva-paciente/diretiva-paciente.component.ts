import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-paciente',
  templateUrl: './diretiva-paciente.component.html',
  styleUrls: ['./diretiva-paciente.component.scss']
})
export class DiretivaPacienteComponent implements OnInit {
  cor: string;
  tempo: number;
  
  constructor() { }

  ngOnInit() {
  }

  alerta(valor) {
    alert(valor);
  }
}
