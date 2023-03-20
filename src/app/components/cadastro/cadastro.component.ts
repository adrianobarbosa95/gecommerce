import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPipe } from 'src/app/pipes/user.pipe';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [
    UserPipe
  ],
})
export class CadastroComponent implements OnInit {

  form !: FormGroup;
  id !: string;
  nome !: string;
  preco !: string;
  quantidade !: string;
  usuario: string = "teste";
 dados!:{} [];
  
  onSubmit() {

    if (this.form.valid) {
      
    
      // this.dados = localStorage.getItem('produto' || '{}');
    
     if(!localStorage.hasOwnProperty('produto')){
      
      localStorage.setItem('produto', JSON.stringify([this.form.value]));
            this.router.navigate(['/produto']);

     } else{
      this.dados = JSON.parse(localStorage.getItem("produto") ?? '[]');
      // window.localStorage.setItem('produto', JSON.stringify(this.dados));

 
     this.dados.push(this.form.value);

      localStorage.setItem('produto', JSON.stringify(this.dados));

            this.router.navigate(['/produto']);
     }
    }

  }
  constructor(private fb: FormBuilder, private router: Router, private user: UserPipe) {
    this.usuario = this.user.transform(JSON.parse(localStorage.getItem('email') ?? ""));
  }
  ngOnInit(): void {

    this.form = this.fb.group({
      id: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      usuario: ['', [Validators.required]]

    });




  }
}
