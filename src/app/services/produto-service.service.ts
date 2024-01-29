import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto, Filtro, ProdutoResponse } from '../models/Produtos';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = `${environment.baseApiUrl}/produto`

  constructor(private http: HttpClient) { }

  GetProdutos(filtro: Filtro): Observable<ProdutoResponse> {
    return this.http.post<ProdutoResponse>(`${this.apiUrl}/produtos`, filtro);
  }

  GetProduto(id: number): Observable<Response<Produto>> {
    return this.http.get<Response<Produto>>(`${this.apiUrl}/${id}`);
  }

  CreateProduto(produto: Produto): Observable<Response<Produto[]>> {
    return this.http.post<Response<Produto[]>>(`${this.apiUrl}`, produto);
  }

  EditProduto(produto: Produto): Observable<Response<Produto[]>> {
    return this.http.put<Response<Produto[]>>(`${this.apiUrl}`, produto);
  }

  ExcluirProduto(id: number): Observable<Response<Produto[]>> {
    return this.http.delete<Response<Produto[]>>(`${this.apiUrl}/${id}`)

  }
}
