import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {


  constructor(public readonly router: Router) { }

  ngOnInit() {
  }

  public redirectToLogin() {
    this.router.navigate(['/login']);
  }

}
