import odoo from "../odoo";
export const dbConnect = async () => {
  try {
    await odoo.connect();
  } catch (error) {
    console.log(error);
  }
};
