import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProdutoService } from "../services/produto.service";
import {CadastroService} from "../services/cadastro.service";

//resolve para buscar e retornar os dados dos usuarios cadastrados atravez do id da rota

@Injectable()
// resolve buscara alguns dados (antes de renderizar o componente) que o componente ira precisar posteriormente
export class CadastroUserResolve implements Resolve<any>{

  constructor(private router: Router, private cadastroService: CadastroService) {}
  //Promise = operações assíncronas
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log(route.params['id']);
    const test = this.cadastroService.arrayCadastro.find((x: { id: any; }) => x.id === route.params['id']);
    if(test){
      console.log(test);
      return test;
    }
    this.router.navigate(['/usuario']);
    return false;
  }
}
