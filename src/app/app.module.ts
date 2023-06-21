import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseModule } from './purchase/purchase.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PurchaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
