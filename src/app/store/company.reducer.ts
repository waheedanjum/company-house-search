import { createReducer, on } from '@ngrx/store';
import * as CompanyActions from './company.actions';
import { CompanySearch } from '../models/company-search';
import { OfficerResponse } from '../models/officer';

export interface CompanyState {
  searchResults: CompanySearch | null;
  officers: OfficerResponse | null;
  loading: boolean;
  error: any;
}

export const initialState: CompanyState = {
  searchResults: null,
  officers: null,
  loading: false,
  error: null
};

export const companyReducer = createReducer(
  initialState,
  //company search
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
  })),
  //officers search
  on(CompanyActions.loadCompanyOfficers, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CompanyActions.loadCompanyOfficersSuccess, (state, { officers }) => ({
    ...state,
    officers,
    loading: false
  })),
  on(CompanyActions.loadCompanyOfficersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
