import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('Grocery App', () => {
	const html = "<my-home></my-home>";
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports : [ RouterTestingModule ],
			declarations : [ AppComponent ]
			//providers : [ provideRoutes ]
		});
	});

	it("should have a title", () => {
		let fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		expect(fixture.debugElement.componentInstance.title).toEqual('Welcome to Grocery App');
		//expect('true').toEqual('true');
	});
	
})
