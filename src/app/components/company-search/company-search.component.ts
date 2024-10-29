import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompanySearch } from '../../models/company-search';
import { CompanyState } from '../../store/company.reducer';
import { searchCompanies } from '../../store/company.actions';
import { Company } from '../../models/company'; // Import the Company model
import { Router } from '@angular/router';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {

  searchTerm: string = '';
  searchResults$: Observable<CompanySearch | null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  searchInitiated: boolean = false;

  selectedCompany?: Company;

  constructor(
    private store: Store<{ company: CompanyState }>,
    private router: Router,
    private companyDataService: CompanyDataService
  ) {
    this.searchResults$ = this.store.select(state => state.company.searchResults);
    this.loading$ = this.store.select(state => state.company.loading);
    this.error$ = this.store.select(state => state.company.error);
  }

  searchCompanies() {
    if (this.searchTerm) {
      this.store.dispatch(searchCompanies({ searchTerm: this.searchTerm }));
      this.searchInitiated = true;
    }
  }

  selectCompany(company: Company) {
      this.companyDataService.setCompany(company);
      this.router.navigate(['/company', company.company_number]);
    }
}
