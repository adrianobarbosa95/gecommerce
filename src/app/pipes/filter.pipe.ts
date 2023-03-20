import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  produtos!: [
    {
      id: any,
      nome: any,
      quantidade: any,
      preco: any,
    }

  ];
  transform(value: string): [{
    id: any,
    nome: any,
    quantidade: any,
    preco: any,
  }] {
    if (localStorage.hasOwnProperty('produto')) {
      this.produtos = JSON.parse(localStorage.getItem('produto') ?? '');
      console.log(this.produtos)
      let filtro !: [{
        id: any,
        nome: any,
        quantidade: any,
        preco: any,
      }]; filtro = [...this.produtos];

      while (filtro.length) {
        filtro.pop();
      }
      this.produtos.forEach((valor) => { if (valor.nome == value) filtro.push(valor) });
      console.log(filtro);

      return filtro;
    }

    else return this.produtos;
  }

}
