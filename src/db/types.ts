export type SalesBuzzContact = {
  id?: number | string;
  name?: string;
  email?: string;
  apellido?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  telefono?: string;
  phone_2?: string;
  mobile?: string;
  customer_id?: string;
  route_id?: string;
  address?: string;
  compound?: string;
  region?: string;
  visit_day?: string;
  recuring?: string;
  origin?: string;
  contact_source?: string;
  cedula_ruc?: string;
};

export type OdooContact = {
  id?: number;
  name?: string;
  email?: string;
  mobile?: string;
  phone?: string;
  city?: string;
  street?: string;
  street2?: string;
  x_telephone?: string;
  x_CustomerID?: string;
  x_Route?: string;
  x_compound?: string;
  x_CustomerStatus?: string;
  x_Day?: string;
};
