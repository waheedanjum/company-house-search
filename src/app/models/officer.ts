export interface OfficerAddress {
  premises: string;
  postal_code: string;
  country: string;
  locality: string;
  address_line_1: string;
}

export interface Officer {
  name: string;
  appointed_on: string;
  officer_role: string;
  date_of_birth: {
    month: number;
    year: number;
  };
  occupation: string;
  country_of_residence: string;
  nationality: string;
  address: OfficerAddress;
  links: {
    officer: {
      appointments: string;
    };
  };
}

export interface OfficerResponse  {
  etag: string;
  links: {
    self: string;
  };
  kind: string;
  items_per_page: number;
  items: Officer[];
}
