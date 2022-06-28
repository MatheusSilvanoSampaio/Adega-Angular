import {Injectable} from "@angular/core";
import {LocalStorageService} from "../localStorage/localStorage.service";
import {Page} from "../componentes/model-page/page";

@Injectable({providedIn: 'root'})
export class CadastroService {
  arrayCadastro:any = [];
  usuarioLogIn: any;

  constructor(private localStorageService: LocalStorageService) {
    //condição que verifica se existe dados no localStorage usuariosCadastrados e adicionar no arrayCadastro
    if(this.localStorageService.get('usuariosCadastrados')){
      const test = JSON.parse(this.localStorageService.get('usuariosCadastrados') || '[]');
      this.arrayCadastro = [...test];
      console.log(this.arrayCadastro)
    }
  }
  cadastro(data: any) {
    this.arrayCadastro.push(data);
    this.localStorageService.set('usuariosCadastrados', this.arrayCadastro);
  }
  //verifica se o email e o usuario ja existe e retorna o resultado no cadastro usuario
  verificarUsuarioEmailExistente(data: any){
    return this.arrayCadastro.find((element: { novoEmail: any; novoUsuario: any; } ) =>
      element.novoEmail === data.novoEmail || element.novoUsuario === data.novoUsuario);
  }
  //verifica se o usuario e a senha são iguais a algum elemento do array que armazena os dados do localStorage usuarios cadastrados
  verificarUsuarioExiste(dados: any){
    console.log(dados);
    return this.arrayCadastro.find((element: { novoUsuario: any; novaSenha: any; }) =>
      element.novoUsuario === dados.user && element.novaSenha === dados.senha);
  }
  //buscar a lista de usuarios cadastrados menos o usuario que esta logado
  buscarListaCadastro(page:Page){
    this.usuarioLogIn = JSON.parse(this.localStorageService.get('login')|| '[]');
    console.log(this.usuarioLogIn)
    const test = JSON.parse(JSON.stringify(this.arrayCadastro.filter((obj: { novoUsuario: any; }) => { // @ts-ignore
      return obj.novoUsuario != this.usuarioLogIn.user})));
    page.totalElements = test.length;
    page.row =  test.splice(page.pageNumber * page.size, page.size);
    return page;
  }
  //remove o usuario atraves do id do mesmo
  removeUsuario(dados: any){
    //console.log(dados);
    const index = this.arrayCadastro.findIndex((currentValue: { id: any; })=>{
      return currentValue.id == dados.id;
    })
    this.arrayCadastro.splice(index, 1);
    this.localStorageService.set('usuariosCadastrados', this.arrayCadastro);
  }
  atualizarUsuario(dados: any){
    const index = this.arrayCadastro.findIndex((currentValue: any) => {
      return currentValue.id == dados.id
    })
    this.arrayCadastro[index] = dados;
    this.localStorageService.set('usuariosCadastrados', this.arrayCadastro);
  }
}
