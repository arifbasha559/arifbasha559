import { Hono } from "hono";
import vike from "@vikejs/hono";
import type { Server } from "vike/types";

const app = new Hono();
vike(app);

export default {
  fetch: app.fetch,
} satisfies Server;
