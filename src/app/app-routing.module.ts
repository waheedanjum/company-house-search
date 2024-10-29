import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';

const routes: Routes = [
  { path: '', component: CompanySearchComponent },
  { path: 'company/:companyNumber', component: CompanyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
