import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';


const routes: Routes = [
  
  { path: 'landing', component: LandingComponent },
  { path: 'subcategory/:id', component: SubcategoryComponent },
  {path:'', redirectTo:'landing', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
