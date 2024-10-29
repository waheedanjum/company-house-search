import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { CompanyOfficersComponent } from './components/company-officers/company-officers.component';

const routes: Routes = [
  { path: 'company/:companyNumber', component: CompanyDetailsComponent },
  { path: 'company/:companyNumber/officers', component: CompanyOfficersComponent },
  { path: '', component: CompanySearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
