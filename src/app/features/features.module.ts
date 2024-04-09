import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { featureRoutes } from './features.routes';


@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    DashboardModule,
    RouterModule.forRoot(featureRoutes, {
      scrollPositionRestoration: 'top'
    }),
  ],
})
export class FeaturesModule {}
