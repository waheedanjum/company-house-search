import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyOfficersComponent } from './company-officers.component';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { loadCompanyOfficers } from '../../store/company.actions';
import { FormsModule } from '@angular/forms'; // For potential forms usage

describe('CompanyOfficersComponent', () => {
  let component: CompanyOfficersComponent;
  let fixture: ComponentFixture<CompanyOfficersComponent>;
  let mockStore: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {

    mockStore = {
      select: jasmine.createSpy().and.callFake((selectorFn: any) => {
        if (selectorFn.name === 'officers') {
          return of(null);
        }
        return of(null);
      }),
      dispatch: jasmine.createSpy()
    };

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('06500244')
        },
      },
      queryParams: of({ title: 'BBC LIMITED' })
    };

    await TestBed.configureTestingModule({
      declarations: [CompanyOfficersComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get companyNumber from ActivatedRoute anddispatch loadCompanyOfficers action', () => {
     expect(component.companyNumber).toBe('06500244');
    expect(component.companyTitle).toBe('BBC LIMITED');
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      loadCompanyOfficers({ companyNumber: '06500244' })
    );
  });

  it('should select officers, loading, and error from the store', () => {
     expect(mockStore.select).toHaveBeenCalledWith(jasmine.any(Function));
    expect(component.officers$).toBeDefined();
    expect(component.loading$).toBeDefined();
    expect(component.error$).toBeDefined();
  });

});
