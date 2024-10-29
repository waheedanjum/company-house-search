import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '../services/company.service';
import * as CompanyActions from './company.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadCompanyOfficers } from './company.actions';

@Injectable()
export class CompanyEffects {

  // handle company search
  searchCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.searchCompanies),
      mergeMap(action =>
        this.companyService.searchCompanies(action.searchTerm).pipe(
          map(searchResults => CompanyActions.searchCompaniesSuccess({ searchResults })),
          catchError(error => of(CompanyActions.searchCompaniesFailure({ error })))
        )
      )
    )
  );

  // handle loading company officers
  loadCompanyOfficers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCompanyOfficers),
      mergeMap(action =>
        this.companyService.getCompanyOfficers(action.companyNumber).pipe(
          map(officers => CompanyActions.loadCompanyOfficersSuccess({ officers })),
          catchError(error => of(CompanyActions.loadCompanyOfficersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}
}
