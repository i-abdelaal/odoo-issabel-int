import { Hono } from "hono";
import { contact } from "./routes";
import { cors } from "hono/cors";

const app = new Hono();
app.use(cors());

app.get("/", (c) => c.text("Welcome :D"));
app.route("/", contact);

export default app;
