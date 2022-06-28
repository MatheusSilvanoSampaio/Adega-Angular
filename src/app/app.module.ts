import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListaProdutoComponent } from './componentes/produtos/lista-produto/lista-produto.component';
import { LoginService } from './services/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoResolver } from './guard/produto.resolve';
import { FormularioProdutoComponent } from './componentes/produtos/formulario-produto/formulario-produto.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { CadastroUsuarioComponent } from './componentes/usuario/cadastro-usuario/cadastro-usuario.component';
import { ListaUsuarioComponent } from './componentes/usuario/lista-usuario/lista-usuario.component';
import {CadastroUserResolve} from "./guard/cadastroUser.resolve";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutosComponent,
    HeaderComponent,
    ListaProdutoComponent,
    FormularioProdutoComponent,
    CadastroUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [LoginService, ProdutoResolver, CadastroUserResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
