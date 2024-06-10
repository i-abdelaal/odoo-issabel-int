import { odoo } from "..";
import type { DBContact } from "../models/dbContactModel";

const allowedContactFields: string[] = ["id", "name", "mobile", "phone", "x_telephone", "street", "street2", "city", "email", "x_CustomerID", "x_Route", "x_compound", "x_CustomerStatus", "x_Day"];

const getAllContacts = async (): Promise<DBContact[]> => {
  return await odoo.searchRead("res.partner", {}, [], { order: "id" });
};

const getContactById = async (id: number | string): Promise<DBContact[]> => {
  return await odoo.searchRead("res.partner", { id }, allowedContactFields);
};

const getContactsByPhoneNumber = async (phone: string): Promise<DBContact[]> => {
  phone = phone.trim();
  return await odoo.searchRead("res.partner", ["|", "|", ["mobile", "ilike", phone], ["phone", "ilike", phone], ["x_telephone", "ilike", phone]], allowedContactFields);
};

export { getAllContacts, getContactById, getContactsByPhoneNumber };
