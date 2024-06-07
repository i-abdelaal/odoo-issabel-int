import odoo from ".";
import type { OdooContact } from "../db/types";

const allowedContactFields: string[] = ["id", "name", "mobile", "phone", "x_telephone", "street", "street2", "city", "email", "x_CustomerID", "x_Route", "x_compound", "x_CustomerStatus", "x_Day"];

const getAllContacts = async (): Promise<OdooContact[]> => {
  return await odoo.searchRead("res.partner", {}, [], { order: "id" });
};

const getContactById = async (id: number | string): Promise<OdooContact[]> => {
  return await odoo.searchRead("res.partner", { id }, allowedContactFields);
};

const getContactsByPhoneNumber = async (number: string): Promise<OdooContact[]> => {
  number = number.trim();
  return await odoo.searchRead("res.partner", ["|", "|", ["mobile", "ilike", number], ["phone", "ilike", number], ["x_telephone", "ilike", number]], allowedContactFields);
};

export { getAllContacts, getContactById, getContactsByPhoneNumber };
