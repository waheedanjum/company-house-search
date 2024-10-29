import { TestBed } from '@angular/core/testing';
import { CompanyDataService } from './company-data.service';
import { Company } from '../models/company';

describe('CompanyDataService', () => {
  let service: CompanyDataService;

  // Mock data
  const mockCompany: Company = {
    company_status: 'Active',
    address_snippet: '123 Fake Street, London, England',
    date_of_creation: '2015-01-01',
    matches: { title: [1, 2] },
    description: 'A fake company description',
    links: { self: '/company/12345678' },
    company_number: '12345678',
    title: 'Fake Company LTD',
    company_type: 'Private Limited Company',
    address: {
      premises: '123 Fake Street',
      postal_code: 'SW1A 1AA',
      country: 'England',
      locality: 'London',
      address_line_1: '123 Fake Street',
    },
    kind: 'searchresults#company',
    description_identifier: ['incorporated-on'],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the company when setCompany is called', () => {
    service.setCompany(mockCompany);
    expect(service.getCompany()).toEqual(mockCompany);
  });

  it('should return null if no company has been set', () => {
    expect(service.getCompany()).toBeNull();
  });

  it('should return the selected company when getCompany is called', () => {

    service.setCompany(mockCompany);

    const company = service.getCompany();
    expect(company).toEqual(mockCompany);
  });

  it('should return null after the company is reset', () => {
    service.setCompany(mockCompany);

    service.setCompany(null as any);
    const company = service.getCompany();
    expect(company).toBeNull();
  });
});
