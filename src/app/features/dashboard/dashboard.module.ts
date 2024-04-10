import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes),
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [DashboardComponent, HomeComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
