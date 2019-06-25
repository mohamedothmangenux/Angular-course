import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TestComponent,
    InputFormatDirective,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule, FormsModule, CustomFormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, MatNativeDateModule
    , NgbModule, NgbPaginationModule, NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ProductListComponent, TopBarComponent, ProductAlertsComponent, ProductDetailsComponent , MatButtonModule, MatCheckboxModule, TestComponent, InputFormatDirective, PostsComponent]
})
export class AppModule { }
