import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
	// .then(success => 
	// 	console.log('App bootstrap success'))
	// .catch(error => console.log(error));