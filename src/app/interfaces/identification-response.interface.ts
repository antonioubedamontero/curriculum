import { NetworkItem } from './network.interface';

export interface IdentificationResponse {
  identification: Identification;
  role: string;
  phone: string;
  email: string;
  provinceCountry: string;
  netWorks: NetworkItem[];
}

export interface Identification {
  name: string;
  surname: string;
}
