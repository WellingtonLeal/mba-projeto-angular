import { Component, OnInit } from '@angular/core';
import { Medico } from '../../model-medico/medico';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validacoes } from 'src/app/shared/validacoes';
import { MedicoService } from '../../service-medico/medico.service';


@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.scss']
})
export class EditarMedicoComponent implements OnInit {

  medico: Medico;
  title: string;

  formulario: FormGroup;

  constructor(route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private medicoService: MedicoService) {
    this.medico = route.snapshot.data.medico;
    this.title = this.medico.id ?  'Atualizar Médico' : 'Cadastrar Médico';
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [this.medico.nome, Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      email: [this.medico.email, Validators.compose([
        Validators.required,
        Validacoes.ValidaEmail
      ])],
      crm: [this.medico.crm, Validators.compose([
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

  get crm() {
    return this.formulario.get('crm');
  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(): void {
    if (this.formulario.valid) {
      this.medicoService.salvar(this.formulario.value)
        .subscribe(() => this.voltar());
    }
  }
}
