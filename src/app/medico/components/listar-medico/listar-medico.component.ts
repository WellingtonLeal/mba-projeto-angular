import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Medico} from '../../model-medico/medico';
import { MedicoService } from '../../service-medico/medico.service';


import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.scss']
})
export class ListarMedicoComponent implements OnInit, OnDestroy {
  public medicos: Medico[];
  colunas: string[] = ['nome', 'email', 'crm', 'acoes'];

  constructor(private medicoService: MedicoService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.medicoService.listar()
      .subscribe(medicos => {
      this.medicos = medicos;
    });
  }

  editar({id}: Medico): void {
    this.router.navigate(['editarMedico', id]);
  }

  remover({id}: Medico): void {
    this.medicoService.remover(id)
      .subscribe(() => this.atualizar());
  }

  }
