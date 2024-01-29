import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto-service.service';
import { Produto } from 'src/app/models/Produtos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  produto?: Produto;
  id!: number;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.produtoService.GetProduto(this.id).subscribe((data) => {
      const dados = data.dados;
      this.produto = dados;
    });
  }

}
