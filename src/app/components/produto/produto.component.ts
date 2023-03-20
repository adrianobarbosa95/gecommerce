import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FilterPipe } from 'src/app/pipes/filter.pipe';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  providers: [
    FilterPipe
  ],
})
export class ProdutoComponent {
  busca!: string;
  produtos!: [
    {
      id: any,
      nome: any,
      quantidade: any,
      preco: any,
    }

  ];

  constructor(private filtro: FilterPipe) {
    if (localStorage.hasOwnProperty('produto'))
      this.produtos = JSON.parse(localStorage.getItem('produto') ?? '');
  }


  change(newValue: Event) {
    if (this.busca)
      this.produtos = this.filtro.transform(this.busca);
    else {
      if (localStorage.hasOwnProperty('produto'))
        this.produtos = JSON.parse(localStorage.getItem('produto') ?? '');
    }
  }

}
