import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../localStorage/localStorage.service';
import { LoginService } from '../../services/login.service';
import {Subject} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  loginFormulario!: FormGroup;
  //variavel de alerta quando o usuario colocar os dados de login incorretos
  log?: boolean;
  logInError = new Subject<boolean>();


  constructor(private loginService: LoginService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.iniciarFormularioLogin()
    this.logInError.subscribe(dados => {
      this.log = dados;
    })
  }

  iniciarFormularioLogin() {
    this.loginFormulario = new FormGroup({
      'user' : new FormControl(null, Validators.required),
      'senha' : new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    })
  }
  salvarDadosFormLogin() {
    console.log(this.loginFormulario);
    //condição que verifica se o usuario existe
    if(this.loginService.verificarCredenciais(this.loginFormulario.getRawValue())){
      this.loginService.login(this.loginFormulario.getRawValue(), 'login');
      this.logInError.next(true)
      this.router.navigate(['/produtos']);
    }else {
      this.logInError.next(false);
      console.log(this.log);
    }
    //;
    //this.dadosUsuario = this.loginFormulario.value;
    /*this.loginService.login(this.loginFormulario.getRawValue()).subscribe(()=>{
      //this.dadosUsuario = this.loginFormulario.value;
      this.router.navigate(['/produtos']);
    });*/
  }
}
