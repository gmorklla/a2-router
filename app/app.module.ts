import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { DogListComponent } from './dog-list.component';
import { routing } from './app.routes';

@NgModule({
	imports: [ 
	    BrowserModule,
	    FormsModule,
	    HttpModule,
		JsonpModule,
		routing	    
	],
	declarations: [ 
		AppComponent,
		HomeComponent,
		DogListComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
