import { type SalesBuzzContact } from "../types";
import { getAllContacts, getContactById, getContactsByPhoneNumber } from "../../odoo/contact";
import { mapContactType } from "../helpers";

export type ContactQuery = {
  id: string;
  number: string;
};

export const getContacts = async ({ id, number }: ContactQuery): Promise<SalesBuzzContact[] | SalesBuzzContact> => {
  if (id) return mapContactType(await getContactById(id));
  if (number) return mapContactType(await getContactsByPhoneNumber(number));
  return mapContactType(await getAllContacts());
};
