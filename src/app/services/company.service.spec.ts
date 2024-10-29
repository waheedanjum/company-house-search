import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CompanyService } from './company.service';
import { CompanySearch } from '../models/company-search';
import { OfficerResponse } from '../models/officer';

describe('CompanyService', () => {
  let service: CompanyService;
  let httpMock: HttpTestingController;
  const apiKey = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf';
  const apiUrl = 'http://localhost:4000/api/TruProxyAPI/rest/Companies/v1';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompanyService],
    });
    service = TestBed.inject(CompanyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call searchCompanies and return search results', () => {
    const mockResponse: CompanySearch = {
      items: [
        {
          company_status: 'active',
          address_snippet: '123 Fake Street, London, England',
          date_of_creation: '2020-01-01',
          matches: { title: [1, 3] },
          description: '12345678 - Incorporated on 1 January 2020',
          links: { self: '/company/12345678' },
          company_number: '12345678',
          title: 'FAKE COMPANY LTD',
          company_type: 'ltd',
          address: {
            premises: '123 Fake Street',
            postal_code: 'SW1A 1AA',
            country: 'England',
            locality: 'London',
            address_line_1: '123 Fake Street',
          },
          kind: 'searchresults#company',
          description_identifier: ['incorporated-on'],
        },
      ],
      total_results: 1,
    };

    service.searchCompanies('FAKE COMPANY').subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${apiUrl}/Search?Query=FAKE%20COMPANY`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('x-api-key')).toBe(apiKey);
    req.flush(mockResponse);
  });

  it('should call getCompanyOfficers and return officer data', () => {
    const mockOfficerResponse: OfficerResponse = {
      etag: 'someEtagValue',
      links: { self: '/company/12345678/officers' },
      kind: 'officer-list',
      items_per_page: 35,
      items: [
        {
          address: {
            premises: 'The Leeming Building',
            postal_code: 'LS2 7JF',
            country: 'England',
            locality: 'Leeds',
            address_line_1: 'Vicar Lane',
          },
          name: 'John Doe',
          appointed_on: '2017-04-01',
          officer_role: 'director',
          links: {
            officer: {
              appointments: '/officers/4R8_9bZ44w0_cRlrxoC-wRwaMiE/appointments',
            },
          },
          date_of_birth: {
            month: 6,
            year: 1969,
          },
          occupation: 'Finance And Accounting',
          country_of_residence: 'United States',
          nationality: 'American',
        },
      ],
    };

    service.getCompanyOfficers('12345678').subscribe((response) => {
      expect(response).toEqual(mockOfficerResponse);
    });

    const req = httpMock.expectOne(`${apiUrl}/Officers?CompanyNumber=12345678`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('x-api-key')).toBe(apiKey);
    req.flush(mockOfficerResponse);
  });
});
