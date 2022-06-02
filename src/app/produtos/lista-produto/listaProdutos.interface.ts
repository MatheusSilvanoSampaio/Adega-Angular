import { TemplateRef } from "@angular/core";

export  interface ListaProdutosInterface {
    nome: string;
    preco: number;
    qtdEstoque: number;
    qtdMinimaEstoque:number;
    id: number;
    editTmpl?: TemplateRef<any>
}

