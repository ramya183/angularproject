import { HomeComponent } from './home/home.component';



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';






const routes: Routes = [{ path: 'signin', component: SigninComponent },
{ path: '', component: LoginComponent },
{ path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
