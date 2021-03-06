import { Component, AfterViewInit } from '@angular/core';
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router';
declare var componentHandler: any;

@Component({
  selector: 'my-app',
  template: `
		<div class="demo-layout-transparent mdl-layout mdl-js-layout">
		  <header class="mdl-layout__header mdl-layout__header--transparent">
		    <div class="mdl-layout__header-row">
		      <!-- Title -->
		      <span class="mdl-layout-title">Title</span>
		      <!-- Add spacer, to align navigation to the right -->
		      <div class="mdl-layout-spacer"></div>
		      <!-- Navigation -->
		      <nav class="mdl-navigation mdl-layout--large-screen-only">
		        <a class="mdl-navigation__link" [routerLink]="['/inicio']" routerLinkActive="active">Inicio</a>
		        <a class="mdl-navigation__link" [routerLink]="['/dogs']" routerLinkActive="active">Dogs</a>
		        <a class="mdl-navigation__link" href="">Link</a>
		        <a class="mdl-navigation__link" href="">Link</a>
		      </nav>
		    </div>
		  </header>
		  <div class="mdl-layout__drawer">
		    <span class="mdl-layout-title">Title</span>
		    <nav class="mdl-navigation">
		      <a class="mdl-navigation__link" [routerLink]="['/inicio']" routerLinkActive="active">Inicio</a>
		      <a class="mdl-navigation__link" [routerLink]="['/dogs']" routerLinkActive="active">Dogs</a>
		      <a class="mdl-navigation__link" href="">Link</a>
		      <a class="mdl-navigation__link" href="">Link</a>
		    </nav>
		  </div>
		  <main class="mdl-layout__content">
			<!-- Router Outlet -->
			<router-outlet></router-outlet>
		  </main>		  
		</div>
  `,
  // Not necessary as we have provided directives using
  // `RouterModule` to root module
  // Tell component to use router directives
  // directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(){
        componentHandler.upgradeAllRegistered();
    }	
}
