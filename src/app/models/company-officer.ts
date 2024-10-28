import { Officer } from "./officer";

export interface CompanyOfficer {
  etag: string;
  inactive_count: number;
  links: { self: string };
  kind: string;
  items_per_page: number;
  items: Officer[];
  total_results: number;
  resigned_count: number;
}
