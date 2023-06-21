import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseComponent } from './purchase.component';
import { Route, RouterModule } from '@angular/router';
import { DataAccessService } from './data-access.service';
import { environment } from 'src/environments/environment.development';
import { API_BASE_URL } from './api-base-url.token';
import { PurchaseCardComponent } from './purchase-card/purchase-card.component';
import { VenuesComponent } from './venues/venues.component';

const routes: Route[] = [
  { path: '', component: PurchaseComponent }
];

@NgModule({
  declarations: [
    PurchaseComponent,
    PurchaseCardComponent,
    VenuesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [
    DataAccessService,
    { provide: API_BASE_URL, useValue: environment.apiBaseUrl }
  ]
})
export class PurchaseModule { }
