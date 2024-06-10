import type { Contact } from "./models/contactModel";
import type { DBContact } from "./db/models/dbContactModel";

const mapContactType = (contacts: DBContact[]): Contact[] => {
  return contacts.map((contact) => {
    const fullName: string[] = contact.name?.split(" ") || [];
    const firstName = fullName[0];
    const lastName = fullName.slice(1).join(" ");
    const address = `${contact.city || ""} ${contact.street || ""} ${contact.street2 || ""}`.trim();
    const mappedContact: Contact = {
      id: contact.id,
      name: contact.name,
      apellido: lastName,
      first_name: firstName,
      last_name: lastName,
      phone: contact.phone || contact.x_telephone || contact.phone || contact.mobile,
      telefono: contact.x_telephone,
      phone_2: contact.phone,
      mobile: contact.mobile,
      customer_id: contact.x_CustomerID,
      route_id: contact.x_Route,
      address: address,
      compound: contact.x_compound,
      region: contact.city,
      visit_day: contact.x_Day,
      recuring: "",
      origin: "",
      contact_source: "",
      cedula_ruc: contact.x_CustomerStatus
    };
    return mappedContact;
  });
};

export { mapContactType };
