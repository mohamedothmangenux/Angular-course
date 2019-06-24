import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TestComponent } from './components/test/test.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TestComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
    MatButtonModule, MatCheckboxModule,FormsModule,CustomFormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ProductListComponent, TopBarComponent, ProductAlertsComponent, ProductDetailsComponent , MatButtonModule, MatCheckboxModule, TestComponent, InputFormatDirective]
})
export class AppModule { }
