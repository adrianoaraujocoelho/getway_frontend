import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produtos';
import { ProdutoService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Produto>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosProduto: Produto | null = null;

  produtoForm!: FormGroup;
  ativo: number = 1;

  constructor(private protudoService: ProdutoService, private router: Router) {
  }
  ngOnInit(): void {

    this.produtoForm = new FormGroup({
      id: new FormControl(this.dadosProduto ? this.dadosProduto.id : 0),
      nome: new FormControl(this.dadosProduto ? this.dadosProduto.nome : '', [Validators.required]),
      preco: new FormControl(this.dadosProduto ? this.dadosProduto.preco : 0, [Validators.required]),

    });
  }

  get nome() {
    return this.produtoForm.get('nome')!;
  }

  submit() {
    this.onSubmit.emit(this.produtoForm.value);
  }

}
