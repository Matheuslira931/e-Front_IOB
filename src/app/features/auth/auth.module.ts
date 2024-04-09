import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { authRoutes } from './auth.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    RouterModule.forChild(authRoutes),
    CommonModule,
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
