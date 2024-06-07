import { dbConnect } from "./src/db";
import app from "./src/app";

const port = Number(process.env.PORT || 3000);

await dbConnect();

Bun.serve({
  fetch: app.fetch,
  port
});

console.log(`Service started on PORT: ${port}`);
