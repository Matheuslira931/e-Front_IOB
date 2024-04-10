import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
      },
      {
        path: 'sign',
        component: SignComponent,
        pathMatch: 'full',
      },
      {
        path: 'forget-password',
        component: ForgetPassComponent,
        pathMatch: 'full',
      },
    ],
  },
];
