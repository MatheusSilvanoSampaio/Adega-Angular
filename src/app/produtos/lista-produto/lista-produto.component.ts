import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ProdutoService } from '../produto.service';
import { ListaProdutosInterface } from './listaProdutos.interface';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit, AfterViewInit {
  @ViewChild('editTmpl', { static: true }) editTmpl?: TemplateRef<any>;

    array:ListaProdutosInterface[] = [];
    columns: any= [];
    ColumnMode = ColumnMode;

  constructor(private produtoService: ProdutoService) { }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    this.listaProdutos();
  }
  listaProdutos(){
   this.array = this.produtoService.buscarListaProduto();
   console.log(this.array);
  }
  removeItem(dados: any){
    this.produtoService.removeItem(dados);
    this.listaProdutos();
  }
  venderItem(dados: any){
    this.produtoService.venderItem(dados);
    this.listaProdutos();
  }
}

