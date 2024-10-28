// // store/company.reducer.ts

// import { createReducer, on } from '@ngrx/store';
// import * as CompanyActions from './company.actions';
// import { CompanyOfficer } from '../models/company-officer';
// import { CompanySearch } from '../models/company-search';


// export interface CompanyState {
//   officers: CompanyOfficer | null;
//   searchResults: CompanySearch | null;
//   loading: boolean;
//   error: any;
// }

// export const initialState: CompanyState = {
//   officers: null,
//   searchResults: null,
//   loading: false,
//   error: null,
// };

// export const companyReducer = createReducer(
//   initialState,
//   on(CompanyActions.loadCompanyOfficers, (state) => ({
//     ...state,
//     loading: true,
//     error: null,
//   })),
//   on(CompanyActions.loadCompanyOfficersSuccess, (state, { officers }) => ({
//     ...state,
//     officers,
//     loading: false,
//     error: null,
//   })),
//   on(CompanyActions.loadCompanyOfficersFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   })),
//   on(CompanyActions.searchCompanies, (state) => ({
//     ...state,
//     loading: true,
//     error: null,
//   })),
//   on(CompanyActions.searchCompaniesSuccess, (state, { searchResults }) => ({
//     ...state,
//     searchResults,
//     loading: false,
//     error: null,
//   })),
//   on(CompanyActions.searchCompaniesFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   }))

// );

import { createReducer, on } from '@ngrx/store';
import * as CompanyActions from './company.actions';
import { CompanySearch } from '../models/company-search';

export interface CompanyState {
  searchResults: CompanySearch | null;
  loading: boolean;
  error: any;
}

export const initialState: CompanyState = {
  searchResults: null,
  loading: false,
  error: null
};

export const companyReducer = createReducer(
  initialState,
  on(CompanyActions.searchCompanies, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CompanyActions.searchCompaniesSuccess, (state, { searchResults }) => ({
    ...state,
    searchResults,
    loading: false
  })),
  on(CompanyActions.searchCompaniesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
