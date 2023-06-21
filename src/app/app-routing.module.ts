import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'purchase', pathMatch: 'full' },
  { 
    path: 'purchase', loadChildren: () => 
    import('./purchase/purchase.module').then(m => m.PurchaseModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
