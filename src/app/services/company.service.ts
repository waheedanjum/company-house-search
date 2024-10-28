import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanySearch } from '../models/company-search';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:4000/api/TruProxyAPI/rest/Companies/v1';

  constructor(private http: HttpClient) {}

  searchCompanies(searchTerm: string): Observable<CompanySearch> {
    const headers = new HttpHeaders({
      'x-api-key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'
    });

    return this.http.get<CompanySearch>(
      `${this.apiUrl}/Search?Query=${encodeURIComponent(searchTerm)}`,
      { headers }
    );
  }
}
