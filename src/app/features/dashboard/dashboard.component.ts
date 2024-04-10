import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    this.loadUserFromLocalStorage();
  }

  loadUserFromLocalStorage(): void {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      this.user = JSON.parse(loggedUser);
    }
  }

  toggleMobileNav(): void {
    const mobileNavItems = document.querySelector('.mobile_nav_items');
    if (mobileNavItems) {
      mobileNavItems.classList.toggle('active');
    }
  }

}
