import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login-guard';
import { LoginComponent } from './login/login.component';
import { Logout } from './guard/logout-guard';
import { FormularioProdutoComponent } from './produtos/formulario-produto/formulario-produto/formulario-produto.component';
import { ProdutoResolver } from './guard/produto.resolve';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent,  canActivate: [Logout]},
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
