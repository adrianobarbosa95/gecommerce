import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @Input()  email !:string;
  @Input()   senha !:string;

  form ! : FormGroup;


  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      senha: ['', [Validators.min(10000000), Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });

  
  }

  onSubmit(){
    // event.preventDefault();
  

     
  }


}
