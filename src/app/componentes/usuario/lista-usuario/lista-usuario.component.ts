import { Component, OnInit } from '@angular/core';
import {ListAbstract} from "../../produtos/list-abstract";
import { ColumnMode } from '@swimlane/ngx-datatable';
import {CadastroService} from "../../../services/cadastro.service";


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent extends ListAbstract implements OnInit{

  ColumnMode = ColumnMode;

  constructor(private cadastroService: CadastroService) {
    super();
  }

  ngOnInit(): void {
    this.setPage({ offset: 0 })
  }
  //carrega os dados da lista de usuarios cadastrados
  loadData() {
    this.listaUsuario();
  }

  listaUsuario(){
    this.page = this.cadastroService.buscarListaCadastro(this.page);
  }
  removeUsuario(dados: any){
    this.cadastroService.removeUsuario(dados);
    this.reloadData();
  }
}
