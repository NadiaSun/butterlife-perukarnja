import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path: '', component: AppComponent, children: [
  //   {path: '', redirectTo: '/beautysalon', pathMatch: 'full'},
  //   {path: 'beautysalon', component: AppComponent},
  //   {path: 'realty', component: AppComponent},
  //   {path: '**', redirectTo: '/beautysalon', pathMatch: 'full'},
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
