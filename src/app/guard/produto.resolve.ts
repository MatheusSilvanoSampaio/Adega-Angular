import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProdutoService } from "../services/produto.service";

//resolve para carregar os dados de produtos atravez do id da rota e retornar eles

@Injectable()
// resolve buscara alguns dados (antes de renderizar o componente) que o componente ira precisar posteriormente
export class ProdutoResolver implements Resolve<any>{

    constructor(private router: Router, private produtoService : ProdutoService) {}
    //Promise = operações assíncronas
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        //console.log(route.params['id']);
        const test = this.produtoService.array.find((x: { id: any; }) => x.id === route.params['id']);
        if(test){
            return test;
        }
        this.router.navigate(['/produtos']);
        return false;
    }
}
