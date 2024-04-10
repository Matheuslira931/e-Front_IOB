import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USERS } from 'src/assets/mock/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
  public message = '';

  constructor(
    public readonly fb: FormBuilder,
    public readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm() : void {
    this.loginForm = new FormGroup({
      inputEmail: new FormControl('', [Validators.required]),
      inputPassword: new FormControl('', [Validators.required])
    });
  }

  public logar() {
    USERS.users.forEach((item: { email: any; password: any; }) => {

      if (item.email == this.loginForm.get('inputEmail')?.value && item.email == null) {
      }else {
        this.message = "verifique o e-mail";
      }if (item.password == this.loginForm.get('inputPassword')?.value && item.password == null) {
      }else {
        this.message = "verifique a senha";
      }if (item.email == this.loginForm.get('inputEmail')?.value && item.password == this.loginForm.get('inputPassword')?.value) {
        localStorage.setItem('loggedUser', JSON.stringify(item));
        this.router.navigate(['/dashboard']);
      }
    });
  }

  public redirectToGoogle() {
    this.router.navigate(['/login']);
  }

  public redirectToSign() {
    this.router.navigate(['/sign']);
  }

  public redirectToForgetPass() {
    this.router.navigate(['/forget-password']);
  }

}
