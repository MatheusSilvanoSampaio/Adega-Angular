import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login-guard';
import { LoginComponent } from './componentes/login/login.component';
import { Logout } from './guard/logout-guard';
import { FormularioProdutoComponent } from './componentes/produtos/formulario-produto/formulario-produto.component';
import { ProdutoResolver } from './guard/produto.resolve';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import {CadastroUsuarioComponent} from "./componentes/usuario/cadastro-usuario/cadastro-usuario.component";
import {ListaUsuarioComponent} from "./componentes/usuario/lista-usuario/lista-usuario.component";
import {CadastroUserResolve} from "./guard/cadastroUser.resolve";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent,  canActivate: [Logout]},
  { path: 'cadastro', component: CadastroUsuarioComponent,  canActivate: [Logout]},
  { path: 'usuario', canActivateChild: [LoginGuard], children: [
    {path: '', component: ListaUsuarioComponent},
      { path: 'cadastro/:id', component: CadastroUsuarioComponent, resolve: {server: CadastroUserResolve}}
    ]},
  {path: 'produtos', canActivateChild: [LoginGuard], children:[
    {path: '', component: ProdutosComponent},
    {path: 'formulario', component: FormularioProdutoComponent},
    {path: 'formulario/:id', component: FormularioProdutoComponent, resolve: {server: ProdutoResolver}}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
