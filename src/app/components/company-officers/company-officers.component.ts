import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompanyState } from '../../store/company.reducer';
import { loadCompanyOfficers } from '../../store/company.actions';
import { OfficerResponse } from '../../models/officer';

@Component({
  selector: 'app-company-officers',
  templateUrl: './company-officers.component.html',
  styleUrls: ['./company-officers.component.css']
})
export class CompanyOfficersComponent implements OnInit {
  officers$: Observable<OfficerResponse | null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  companyNumber!: string;
  companyTitle!: string;

  constructor(private route: ActivatedRoute, private store: Store<{ company: CompanyState }>) {
    this.officers$ = this.store.select(state => state.company.officers);
    this.loading$ = this.store.select(state => state.company.loading);
    this.error$ = this.store.select(state => state.company.error);
  }

  ngOnInit(): void {
     this.companyNumber = this.route.snapshot.paramMap.get('companyNumber')!;

     this.route.queryParams.subscribe(params => {
      this.companyTitle = params['title'];
    });

    // Dispatch the action to load the officers
    this.store.dispatch(loadCompanyOfficers({ companyNumber: this.companyNumber }));
  }
}
