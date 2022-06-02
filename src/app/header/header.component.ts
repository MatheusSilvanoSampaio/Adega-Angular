import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorage/localStorage.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
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
