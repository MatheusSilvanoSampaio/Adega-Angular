import { Injectable } from "@angular/core";
import { LocalStorageService } from "src/app/localStorage/localStorage.service";
import { Page } from "../componentes/model-page/page";


@Injectable({ providedIn: 'root' })
export class ProdutoService {
    array:any = [];

    constructor(private localStorageService: LocalStorageService){
        //verifica se existe dados no localStorage produto e adiciona no array
        if(this.localStorageService.get('produto')){
            const test = JSON.parse(this.localStorageService.get('produto') || '[]');
            this.array = [...test];
            //console.log(this.array)
        }
    }
    cadastroProduto(data: any){
        this.array.push(data);
        this.localStorageService.set('produto', this.array);
    }
    buscarListaProduto(page:Page){
        const test = JSON.parse(JSON.stringify(this.array));
        page.totalElements = test.length;
        page.row =  test.splice(page.pageNumber * page.size, page.size);
        return page;
    }
    removeItem(dados: any){
        //console.log(dados);
        const index = this.array.findIndex((currentValue: { id: any; })=>{
            return currentValue.id == dados.id;
        })
        this.array.splice(index, 1);
        this.localStorageService.set('produto', this.array);
    }
    venderItem(dados: any){
        //console.log(this.array);
        const index = this.array.findIndex((currentValue: any) => {
            return currentValue.id == dados.id;
        })
        //console.log(this.array[index]);
        if(this.array[index].qtdEstoque > this.array[index].qtdMinimaEstoque){
            this.array[index].qtdEstoque = this.array[index].qtdEstoque -1;
            this.localStorageService.set('produto', this.array);
        }
    }
    atualizarProduto(dados: any){
       const index = this.array.findIndex((currentValue: any) => {
           return currentValue.id == dados.id
       })
        this.array[index] = dados;
        this.localStorageService.set('produto', this.array);
    }
}
