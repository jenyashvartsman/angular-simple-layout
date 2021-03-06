import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalModule } from './features/layout/portal/portal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PortalModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
