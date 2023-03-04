import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { AboutComponent } from './about/about.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent, 
    LinechartComponent, AboutComponent, BarchartComponent, PiechartComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule],
    
  bootstrap: [AppComponent],
})
export class AppModule {}
