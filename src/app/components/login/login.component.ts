import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @Input()  email !:string;
  @Input()   senha !:string;

  form ! : FormGroup;


  constructor (private fb: FormBuilder, private router:Router) {}


    
    
  ngOnInit(): void {
    if( localStorage.getItem('logado')){
    
      this.router.navigate(['/']);
    }
    this.form = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      senha: ['', [Validators.min(10000000), Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });

  
  }

  onSubmit(){
    // event.preventDefault();
  if(this.form.valid){
    window.localStorage.setItem('email', JSON.stringify(this.email));
    window.localStorage.setItem('logado', JSON.stringify(true));
    this.router.navigate(['/']);  }

     
  }

}
