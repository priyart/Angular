import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PriyaAppComponent } from './priya.app.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    PriyaAppComponent,
    AppComponent
  ],
  bootstrap: [PriyaAppComponent,AppComponent]
})
export class PriyaAppModule { }
