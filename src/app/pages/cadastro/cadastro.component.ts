import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produtos';
import { ProdutoService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  btnAcao = "Cadastrar!";
  btnTitulo = "Cadastrar Produto!";

  constructor(private produtoService: ProdutoService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createProduto(produto: Produto) {

    this.produtoService.CreateProduto(produto).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }



}
