import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';

const routes: Routes = [
  { path: "linechart", component: LinechartComponent},
  { path: "barchart", component: BarchartComponent},
  { path: "about", component: AboutComponent},
  { path: "**", component: LinechartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
