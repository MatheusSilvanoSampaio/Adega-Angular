import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {CadastroService} from "../../../services/cadastro.service";
import {CustomValidators} from "../../../Validators/CustomValidators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  cadastroFormularioUsuario!: FormGroup;
  //carrega os dados da rota atraves do id
  server?: any;
  //verifica se o e-mail ou usuario ja existe no localStorage e avisa o usuario
  userEmailIncorreto?: boolean;
  isAuthenticatedSubscribe = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private cadastroService: CadastroService, private router: Router, private customValidators: CustomValidators) {
  }

  ngOnInit(): void {
    this.iniciarFormularioCadastro();
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
      console.log(this.server);
      this.cadastroFormularioUsuario.patchValue(this.server);
    });
    this.isAuthenticatedSubscribe.subscribe(dados => {
      this.userEmailIncorreto = dados;
    })
  }

  iniciarFormularioCadastro() {
    this.cadastroFormularioUsuario = new FormGroup({
        'id' : new FormControl(null),
        'novoUsuario': new FormControl(null, Validators.required),
        'novoEmail': new FormControl(null, [Validators.required, Validators.email]),
        'novaSenha': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
        'confirmarSenha': new FormControl(null, Validators.required)
    }, {validators: this.customValidators.senhasIguais}
    );
  }

  salvarDadosFormCadastro() {
    console.log(this.cadastroFormularioUsuario);
    //verifica se o usuario ou email ja existe no localStorage
    if (this.cadastroFormularioUsuario.get('id')?.value == null) {
      if(!this.cadastroService.verificarUsuarioEmailExistente(this.cadastroFormularioUsuario.getRawValue())){
        let test = this.cadastroFormularioUsuario.getRawValue();
        test.id = Math.random().toString(16).slice(2)
        this.cadastroService.cadastro(test);
        this.isAuthenticatedSubscribe.next(true);
      }else {
        this.isAuthenticatedSubscribe.next(false);
        console.log('erro');
        console.log(this.userEmailIncorreto);
      }
    } else {
      this.cadastroService.atualizarUsuario(this.cadastroFormularioUsuario.getRawValue());
      this.router.navigate(['/usuario']);
      }
  }
}
