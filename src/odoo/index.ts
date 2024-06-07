import Odoo from "odoo-await";

const odoo = new Odoo({
  baseUrl: String(process.env.ODOO_URL),
  port: Number(process.env.ODOO_PORT || 8069),
  db: String(process.env.ODOO_DB_NAME),
  username: String(process.env.ODOO_DB_USERNAME),
  password: String(process.env.ODOO_DB_PASSWORD)
});

export default odoo;
