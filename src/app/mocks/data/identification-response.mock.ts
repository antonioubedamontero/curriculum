import {
  Identification,
  IdentificationResponse,
  NetworkItem,
} from '../../interfaces';

export const identificationMock: Identification = {
  name: 'mock name',
  surname: 'mock surname',
};

export const networkItem: NetworkItem = {
  url: 'http://fake-url',
  label: 'Fake network label',
  ariaLabel: 'Fake aria label',
  icon: 'Fake icon',
};

export const identificationResponseMock: IdentificationResponse = {
  identification: identificationMock,
  role: 'mock role',
  phone: 'mock phone',
  email: 'mock email',
  provinceCountry: 'mock provice, country',
  netWorks: [networkItem, networkItem],
  photoUrl: 'http://mock-photo.jpg',
};
