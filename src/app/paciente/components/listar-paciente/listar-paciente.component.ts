import { Component, OnInit, OnDestroy } from '@angular/core';
import { Paciente } from "../../model-paciente/paciente";
import { PacienteService } from '../../service-paciente/paciente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.scss']
})
export class ListarPacienteComponent implements OnInit, OnDestroy {
  public pacientes: Paciente[];
  colunas: string[] = ['nome', 'email', 'telefone', 'acoes'];

  constructor(private pacienteService: PacienteService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.pacienteService.listar()
      .subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  editar({id}: Paciente): void {
    this.router.navigate(['editarPaciente', id]);
  }

  remover({id}: Paciente): void {
    this.pacienteService.remover(id)
      .subscribe(() => this.atualizar());
  }

}
