import { Paciente } from "../../model-paciente/paciente";
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PacienteService} from '../../service-paciente/paciente.service';
import {Validacoes} from '../../../shared/validacoes';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  paciente: Paciente;
  title: string;

  formulario: FormGroup;

  constructor(route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private pacienteService: PacienteService) {
    this.paciente = route.snapshot.data.paciente;
    this.title = this.paciente.id? 'Atualizar Paciente' : 'Cadastrar Paciente';
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({

      nome: [this.paciente.nome, Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      email: [this.paciente.email, Validators.compose([
        Validators.required,
        Validacoes.ValidaEmail
      ])],
      telefone: [this.paciente.telefone, Validators.compose([
        Validators.required
      ])],
      
    });

    this.formulario.valueChanges
      .subscribe((values) => {
      console.log(values);
    });

    this.nome.valueChanges.subscribe(value => {
      if (value && value.length > 3) {
        this.email.setValue(`${value}@empresa.com`);
      }
    });
  }
  
  get nome() {
    return this.formulario.get('nome');
  }

  get email() {
    return this.formulario.get('email');
  }

  get telefone() {
    return this.formulario.get('telefone');
  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(): void {
    if (this.formulario.valid) {
      this.pacienteService.salvar(this.formulario.value)
        .subscribe(() => this.voltar());
    }
  }
}
