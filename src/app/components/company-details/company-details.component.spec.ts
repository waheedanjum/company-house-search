import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailsComponent } from './company-details.component';
import { CompanyDataService } from '../../services/company-data.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;
  let mockCompanyDataService: any;

  beforeEach(async () => {

    mockCompanyDataService = jasmine.createSpyObj(['getCompany']);

    await TestBed.configureTestingModule({
      declarations: [CompanyDetailsComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: CompanyDataService, useValue: mockCompanyDataService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '12345678'
              }
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display company details when data is available', () => {
    // Mock company data
    const mockCompany = {
      company_number: '12345678',
      title: 'Fake Company LTD',
      address_snippet: '123 Fake Street, London, England',
      company_status: 'Active',
      company_type: 'Private Limited Company',
      date_of_creation: '2015-01-01'
    };

    mockCompanyDataService.getCompany.and.returnValue(mockCompany);

    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('Fake Company LTD');
    expect(compiled.querySelector('.company-number').textContent).toContain('12345678');
    expect(compiled.querySelector('strong').textContent).toContain('123 Fake Street, London, England');
  });

  it('should handle missing company data gracefully', () => {

    mockCompanyDataService.getCompany.and.returnValue(null);

    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h1')).toBeNull();

    const noDataMessage = compiled.querySelector('p');
    expect(noDataMessage).toBeTruthy();
    expect(noDataMessage.textContent).toContain('No company data available.');
  });
});
