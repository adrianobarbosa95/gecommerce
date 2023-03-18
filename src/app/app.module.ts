import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './components/layout/full/full.component';
import { ContainerComponent } from './components/layout/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/page/menu/menu.component';
import { UserPipe } from './pipes/user.pipe'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoComponent } from './components/produto/produto.component';
  
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContainerComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    UserPipe,
    ProdutoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
