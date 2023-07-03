import { ServeOptions } from "bun";
import { solve_board } from "./solveBoard";
import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import { cors } from "hono/cors";

const app = new Hono();
app.use("*", prettyJSON());
app.use("*", cors());

app.post("/", async (ctx) => {
  const body = await ctx.req.json();
  if (!Array.isArray(body)) {
    return new Response("invalid data", {
      status: 404,
      statusText: "expected array of string",
    });
  }
  if (body.length !== 16) {
    return new Response("invalid data", {
      status: 404,
      statusText: "expected array of string, length of 16",
    });
  }
  const result = solve_board(body);
  return ctx.json(result);
});

export default {
  fetch: app.fetch,
  port: 8080,
} satisfies ServeOptions;
