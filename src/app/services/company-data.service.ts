import { Injectable } from '@angular/core';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyDataService {
  private selectedCompany: Company | null = null;

  setCompany(company: Company): void {
    this.selectedCompany = company;
  }

  getCompany(): Company | null {
    return this.selectedCompany;
  }
}
