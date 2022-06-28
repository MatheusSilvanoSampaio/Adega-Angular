import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {LocalStorageService} from "../localStorage/localStorage.service";
import {CadastroService} from "./cadastro.service";

@Injectable({providedIn: 'root'})
export class LoginService {
  isAuthenticated = false;

  isAuthenticatedSubscribe = new Subject<boolean>();

  constructor(private router: Router, private localStorageService: LocalStorageService, private cadastroService: CadastroService) {}

  //verifica se o o usuario esta logado ou nao
  verificarLogin() {
    //this.isAuthenticated = !this.localStorageService.get('login') ? false : true;
    this.isAuthenticated = !!this.localStorageService.get('login');
    console.log(this.isAuthenticated);
    return this.isAuthenticated;
  }
  //recebe os dados se o usuario ja existe e retorna os mesmo...na hora de cadastrar usuario
  verificarCredenciais(dados: any){
    return this.cadastroService.verificarUsuarioExiste(dados)
  }
  login(data: any, key: any) {
    this.localStorageService.set(key, data);
    this.isAuthenticatedSubscribe.next(true);
  }
  logOut() {
    this.isAuthenticatedSubscribe.next(false);
    this.localStorageService.remove('login');
    this.router.navigate(['/login']);
  }
}
