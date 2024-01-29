export interface ProdutoResponse {
  dados: {
    paginacao: {
      paginaAtual: number,
      totalItens: number,
      totalPaginas: number
    },
    itens: Produto[];
  },
  mensagem: string,
  sucesso: boolean
}

export interface Filtro {
  paginacao: {
    paginaAtual: number,
    itensPorPagina: number
  },
  filtroId: number,
  filtroNome: string
}

export interface Produto {
  id?: number,
  nome: string,
  preco: number,
}

