import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanySearch } from '../models/company-search';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly apiUrl: string = 'http://localhost:4000/api/TruProxyAPI/rest/Companies/v1';
  private readonly apiKey: string = "PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf"

  constructor(private http: HttpClient) {}

  searchCompanies(searchTerm: string): Observable<CompanySearch> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<CompanySearch>(
      `${this.apiUrl}/Search?Query=${encodeURIComponent(searchTerm)}`,
      { headers }
    );
  }

  getCompanyDetails(companyNumber: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any>(
      `${this.apiUrl}/Company/${companyNumber}`,
      { headers }
    );
  }
}
