import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanySearchComponent } from './company-search.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { CompanyDataService } from '../../services/company-data.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { searchCompanies } from '../../store/company.actions';

describe('CompanySearchComponent', () => {
  let component: CompanySearchComponent;
  let fixture: ComponentFixture<CompanySearchComponent>;
  let mockStore: any;
  let mockRouter: any;
  let mockCompanyDataService: any;

  beforeEach(async () => {

    mockStore = {
      select: jasmine.createSpy().and.returnValue(of(null)),
      dispatch: jasmine.createSpy(),
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockCompanyDataService = {
      setCompany: jasmine.createSpy()
    };

    await TestBed.configureTestingModule({
      declarations: [CompanySearchComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: Router, useValue: mockRouter },
        { provide: CompanyDataService, useValue: mockCompanyDataService },
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch searchCompanies action when searchCompanies is called', () => {
    component.searchTerm = 'test company';
    component.searchCompanies();

    expect(mockStore.dispatch).toHaveBeenCalledWith(
      searchCompanies({ searchTerm: 'test company' })
    );
  });

  it('should call setCompany on CompanyDataService and navigate to company details when selectCompany is called', () => {
    const mockCompany = { company_number: '123', title: 'Test Company' } as any;
    component.selectCompany(mockCompany);

    expect(mockCompanyDataService.setCompany).toHaveBeenCalledWith(mockCompany);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/company', '123']);
  });
});
