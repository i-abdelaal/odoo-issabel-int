import { type SalesBuzzContact } from "../types";
import { getAllContacts, getContactById, getContactsByPhoneNumber } from "../../odoo/contact";
import { mapContactType } from "../helpers";

export type ContactQuery = {
  id: string;
  phone: string;
};

export const getContacts = async ({ id, phone }: ContactQuery): Promise<SalesBuzzContact[] | SalesBuzzContact> => {
  if (id) return mapContactType(await getContactById(id));
  if (phone) return mapContactType(await getContactsByPhoneNumber(phone));
  return mapContactType(await getAllContacts());
};
