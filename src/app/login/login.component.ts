import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorage/localStorage.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginFormulario!: FormGroup;
  
  constructor(private loginService: LoginService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.iniciarFormularioLogin()
  }

  iniciarFormularioLogin() {
    this.loginFormulario = new FormGroup({
      'user' : new FormControl(null, Validators.required),
      'senha' : new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]) 
    })
  }
  salvarDadosFormLogin() {
    console.log(this.loginFormulario);
    this.loginService.login(this.loginFormulario.getRawValue());
    //this.dadosUsuario = this.loginFormulario.value;
    this.router.navigate(['/produtos']); 
  } 
}
