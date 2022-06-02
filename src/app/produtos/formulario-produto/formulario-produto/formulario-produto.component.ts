import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrls: ['./formulario-produto.component.css']
})
export class FormularioProdutoComponent implements OnInit {

  id = 0;
  server?: any;
  cadastroProduto!: FormGroup;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService,private router: Router) { }

  ngOnInit(): void {
    this.iniciarFormularioCadastro();
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
      console.log(this.server);
      this.cadastroProduto.patchValue(this.server);
    });
  }

  iniciarFormularioCadastro(){
    this.cadastroProduto = new FormGroup ({
      'id' : new FormControl(null),
      'nome' : new FormControl(null, Validators.required),
      'preco' : new FormControl(null, Validators.required),
      'qtdEstoque' : new FormControl(null, Validators.required),
      'qtdMinimaEstoque' :  new FormControl(null, Validators.required)
    })
  }
  salvarDadosFormCadastro() {
    if(this.cadastroProduto.get('id')?.value == null){
      console.log(this.cadastroProduto);
      let test = this.cadastroProduto.getRawValue();
      test.id = Math.random().toString(16).slice(2)
      this.produtoService.cadastroProduto(test);
    } else {
      this.produtoService.atualizarProduto(this.cadastroProduto.getRawValue()); 
    
    }

    this.router.navigate(['../']); 
  }
}
