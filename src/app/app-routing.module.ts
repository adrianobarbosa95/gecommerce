import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/layout/container/container.component';
import { FullComponent } from './components/layout/full/full.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: FullComponent, canActivate: [AuthGuard],

    children: [
 
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'produto', component: ProdutoComponent },
      { path: 'cadastro', component: CadastroComponent }
    ]


  },

  { path: 'login', component: ContainerComponent,

  children:[
    { path: '', component: LoginComponent}

  ]

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
