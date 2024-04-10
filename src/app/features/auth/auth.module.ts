import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { authRoutes } from './auth.routes';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignComponent } from './sign/sign.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignComponent, ForgetPassComponent],
  imports: [
    RouterModule.forChild(authRoutes),
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
