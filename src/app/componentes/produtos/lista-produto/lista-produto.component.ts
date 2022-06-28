import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ProdutoService } from '../../../services/produto.service';
import { ListaProdutosInterface } from './listaProdutos.interface';
import { ListAbstract } from '../list-abstract';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class ListaProdutoComponent extends ListAbstract implements OnInit, AfterViewInit {

  @ViewChild('editTmpl', { static: true }) editTmpl?: TemplateRef<any>;
    array:ListaProdutosInterface[] = [];
    test:ListaProdutosInterface[] = [];
    ColumnMode = ColumnMode;

  constructor(private produtoService: ProdutoService) {
    super();
  }
  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
    //sempre inicia na pagina 0
    this.setPage({ offset: 0 });
    /*this.apiService.readProducts().subscribe((products: ListaProdutosInterface[])=>{
      this.test = products;
      console.log(this.test);
    })*/
  }
  //levar os dados para a classe abstrata de paginação
  loadData() {
    this.listaProdutos();
  }

  listaProdutos(){
  this.page = this.produtoService.buscarListaProduto(this.page);

   //console.log(this.array);
  }
  removeItem(dados: any){
    this.produtoService.removeItem(dados);
    this.reloadData();
  }
  venderItem(dados: any){
    this.produtoService.venderItem(dados);
    this.reloadData();
  }
  //verificar a quantidade de estoque para habilitar ou nao a classe do css
  getRowClass = (row: any) => {
    if(row.qtdEstoque === row.qtdMinimaEstoque){
      return {
        'row-color': true
      }
    }
    return false;
  }
}
