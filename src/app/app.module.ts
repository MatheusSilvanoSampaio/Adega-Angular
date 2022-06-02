import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HeaderComponent } from './header/header.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { LoginService } from './login/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoResolver } from './guard/produto.resolve';
import { FormularioProdutoComponent } from './produtos/formulario-produto/formulario-produto/formulario-produto.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutosComponent,
    HeaderComponent,
    ListaProdutoComponent,
    FormularioProdutoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxDatatableModule
  ],
  providers: [LoginService, ProdutoResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
