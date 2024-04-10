import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent implements OnInit {

  constructor(public readonly router: Router) { }

  ngOnInit() {
  }

  public redirectToLogin() {
    this.router.navigate(['/login']);
  }

}
