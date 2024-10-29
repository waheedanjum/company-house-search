import { Company } from "./company";

export interface CompanySearch {
  items: Company[];
  total_results: number;
}
