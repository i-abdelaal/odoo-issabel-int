import { Hono } from "hono";
import contact from "./routes/contact";
import { cors } from "hono/cors";

const homePage = `<h2>Welcome to Issabel phone book <i><small>v1.0.0</small></i></h2>`;

const app = new Hono();
app.use(cors());

app.get("/", (c) => c.render(homePage));
app.route("/", contact);

export default app;
