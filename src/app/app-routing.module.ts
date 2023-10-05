import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandalonComponent } from './standalon/standalon.component';
console.log('rout module called')
const routes: Routes = [
{
  path:'standalone', component:StandalonComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
