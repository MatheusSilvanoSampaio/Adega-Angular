import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '../../localStorage/localStorage.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //variavel que verifica se o usuario está ou nao logado no localStorage
  loginStorage?: boolean;

  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
    this.loginStorage = this.loginService.verificarLogin();
    this.loginService.isAuthenticatedSubscribe.subscribe(dados => {
      this.loginStorage = dados;
    })
  }
  sair(){
    this.loginService.logOut();
  }
}
