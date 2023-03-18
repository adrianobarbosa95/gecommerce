import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
email! :string;
  deslogar(){
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  constructor (private router: Router) {
    this.email = JSON.parse(localStorage.getItem('email') ?? "Usuario") ;
  }
}
