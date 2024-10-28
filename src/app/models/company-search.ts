export interface CompanySearch {
  items: CompanySearchItem[];
  total_results: number;
}

export interface CompanySearchItem {
  company_number: string;
  title: string;
  address_snippet: string;
  date_of_creation: string;
  company_status: string;
  links: {
    self: string;
  };
}
