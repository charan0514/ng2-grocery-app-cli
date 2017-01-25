import '../rxjs/rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data-service/in-memory-data.service';

import { AppRoutingModule } from './routing-module/app-routing.module';

import { GroceryService } from './service/grocery.service';
import { LoginService } from './login-service/login.service';

import { AppComponent } from './app.component';

import { BrowseGroceryComponent } from './grocery-store/browse-grocery.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
	imports : [ BrowserModule, HttpModule, AppRoutingModule, FormsModule, ReactiveFormsModule, MaterialModule.forRoot(), InMemoryWebApiModule.forRoot(InMemoryDataService) ],
	declarations : [ AppComponent, BrowseGroceryComponent, CartDetailComponent, LoginComponent, SignupComponent],
	providers : [ GroceryService, LoginService ],
	bootstrap : [ AppComponent]
})

export class AppModule { }