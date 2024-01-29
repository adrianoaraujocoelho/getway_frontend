import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto-service.service';
import { Produto, Filtro } from '../../models/Produtos';
import { ExcluirComponent } from '../../components/excluir/excluir.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];
  produtosGeral: Produto[] = [];
  columnsToDisplay = ['Id', 'Nome', 'Preco', 'Ações', 'Excluir'];
  paginaAtual = 0;
  totalPaginas = 0;

  constructor(private produtoService: ProdutoService, public matDialog: MatDialog) { }

  filtroNomeDinamico: string = "";

  ngOnInit(): void {
    this.atualizarProdutos();
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filtroNomeDinamico = target.value.toLowerCase();
    this.atualizarProdutos();
  }

  private atualizarProdutos() {
    const filtro = {
      paginacao: {
        paginaAtual: this.paginaAtual,
        itensPorPagina: 10
      },
      filtroId: 0,
      filtroNome: this.filtroNomeDinamico || ""
    };

    this.produtoService.GetProdutos(filtro).subscribe((data) => {
      this.produtosGeral = data.dados.itens || [];
      this.produtos = data.dados.itens || [];
      this.totalPaginas = data.dados.paginacao.totalPaginas;
    });
  }

  avancarPagina() {
    if (this.paginaAtual < this.totalPaginas - 1) {
      this.paginaAtual++;
      this.atualizarProdutos();
    }
  }


  retrocederPagina() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
      this.atualizarProdutos();
    }
  }

  openDialog(id: number) {
    this.matDialog.open(ExcluirComponent, {
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    })
  }
}
