import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '../services/company.service';
import * as CompanyActions from './company.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CompanyEffects {
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

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}
}
