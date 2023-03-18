import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/layout/container/container.component';
import { FullComponent } from './components/layout/full/full.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '', component: FullComponent,

    children: [
 
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent }
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
