import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path: '', component:HomeComponent },
 { path: 'data', component:DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
