import { Hono } from "hono";
import { Layout } from "./components/Layout";

const app = new Hono();

app.use("*", async (c, next) => {
  c.setRenderer((context) => {
    return c.html(<Layout>{context}</Layout>);
  });
  await next();
});

app.get("/", (c) => c.render(<h1 class="text-4xl">Hello Hono🔥</h1>));

app.get("/user/:name", (c) => {
  const name = c.req.param("name");
  return c.render(<h1 class="text-4xl">Hello {name}!</h1>);
});

app.notFound((c) => c.text("Page not found!", 404));

export default app;
