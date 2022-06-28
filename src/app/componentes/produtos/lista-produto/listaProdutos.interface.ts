import { TemplateRef } from "@angular/core";
import { Data } from "@angular/router";

export  interface ListaProdutosInterface {
    nome: string;
    preco: number;
    qtdEstoque: number;
    qtdMinimaEstoque:number;
    id: number;
    editTmpl?: TemplateRef<any>
}

