import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompanySearch } from '../../models/company-search';
import { CompanyState } from '../../store/company.reducer';
import { searchCompanies } from '../../store/company.actions';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {
  searchTerm: string = ''; // For the input field
  searchResults$: Observable<CompanySearch | null>; // Observable for search results
  loading$: Observable<boolean>; // Observable for loading state
  error$: Observable<any>; // Observable for error state
  searchInitiated: boolean = false; // Track if search has started

  constructor(private store: Store<{ company: CompanyState }>) {
    this.searchResults$ = this.store.select(state => state.company.searchResults);
    this.loading$ = this.store.select(state => state.company.loading);
    this.error$ = this.store.select(state => state.company.error);
  }

  // Dispatch the search action when the user clicks "Search"
  searchCompanies() {
    if (this.searchTerm) {
      this.store.dispatch(searchCompanies({ searchTerm: this.searchTerm }));
      this.searchInitiated = true;
    }
  }
}
