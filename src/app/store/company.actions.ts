import { createAction, props } from '@ngrx/store';
import { CompanyOfficer } from '../models/company-officer';
import { CompanySearch } from '../models/company-search';

// Action for loading company officers
export const loadCompanyOfficers = createAction(
  '[Company] Load Officers',
  props<{ companyNumber: string }>()
);

export const loadCompanyOfficersSuccess = createAction(
  '[Company] Load Officers Success',
  props<{ officers: CompanyOfficer }>()
);

export const loadCompanyOfficersFailure = createAction(
  '[Company] Load Officers Failure',
  props<{ error: any }>()
);



export const searchCompanies = createAction(
  '[Company Search] Search Companies',
  props<{ searchTerm: string }>()
);

export const searchCompaniesSuccess = createAction(
  '[Company Search] Search Companies Success',
  props<{ searchResults: CompanySearch }>()
);

export const searchCompaniesFailure = createAction(
  '[Company Search] Search Companies Failure',
  props<{ error: any }>()
);
