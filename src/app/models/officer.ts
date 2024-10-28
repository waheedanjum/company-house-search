import { Address } from './Address';
import { OfficerLink } from './officer-link';

export interface Officer {
  address: Address;
  name: string;
  appointed_on: string;
  officer_role: string;
  links: { officer: OfficerLink };
  date_of_birth?: { month: number; year: number };
  occupation?: string;
  country_of_residence?: string;
  nationality?: string;
  resigned_on?: string;
}
