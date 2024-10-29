import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../models/company';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | null = null;

  constructor(
    private route: ActivatedRoute,
    private companyDataService: CompanyDataService
  ) {}

  ngOnInit(): void {

    const selectedCompany = this.companyDataService.getCompany();

    if (selectedCompany) {
      // Create a copy of the company object to modify it
      this.company = { ...selectedCompany };

      this.company.company_type.toLocaleLowerCase() === "ltd" ?
        this.company.company_type = "Private Limited Company" : this.company.company_type;

      this.company.company_status.toLocaleLowerCase() === "active" ?

      this.company.company_status = "Active": this.company.company_status;

      this.company.company_status.toLocaleLowerCase() === "dissolved" ?
        this.company.company_status = "Dissolved": this.company.company_status;

        console.log("Company :", this.company)

    }

  }
}
