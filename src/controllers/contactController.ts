import { mapContactType } from "../helpers";
import type { Contact } from "../models/contactModel";
import { getContactById, getContactsByPhoneNumber, getAllContacts } from "../db/services/contactService";

export type ContactQuery = {
  id: string;
  phone: string;
};

export const getContacts = async ({ id, phone }: ContactQuery): Promise<Contact[] | Contact> => {
  if (id) return mapContactType(await getContactById(id))[0] || {};
  if (phone) return mapContactType(await getContactsByPhoneNumber(phone));
  return mapContactType(await getAllContacts());
};
