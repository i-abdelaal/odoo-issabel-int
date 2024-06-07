import { Hono } from "hono";
import { getContacts, type ContactQuery } from "../db/services/contactService";

const contact = new Hono().basePath("/contact");

contact.get("/", async (c) => {
  const query = c.req.query() as ContactQuery;
  const contacts = await getContacts(query);
  return c.json(contacts);
});

export default contact;
