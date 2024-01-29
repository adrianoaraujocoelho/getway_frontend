import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produtos';
import { ProdutoService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  inputdata: any
  produto!: Produto;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private produtoService: ProdutoService, private router: Router, private ref: MatDialogRef<ExcluirComponent>) { }

  ngOnInit(): void {
    this.inputdata = this.data;

    this.produtoService.GetProduto(this.inputdata.id).subscribe(data => {
      this.produto = data.dados;
    });
  }

  excluir() {
    this.produtoService.ExcluirProduto(this.inputdata.id).subscribe(data => {
      this.ref.close();
      window.location.reload();
    });
  }

}
