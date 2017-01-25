import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseGroceryComponent } from '../grocery-store/browse-grocery.component';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

const routes : Routes = [
	{ path : 'grocery-store', component :  BrowseGroceryComponent },
	{ path : 'cart-details', component :  CartDetailComponent },
	{ path : 'login', component : LoginComponent },
	{ path : 'signup', component : SignupComponent },
	{ path : '', redirectTo :  '/login', pathMatch : 'full' }
]; 

@NgModule ({
	imports : [ RouterModule.forRoot(routes) ],
	exports : [ RouterModule ]
})

export class AppRoutingModule { }