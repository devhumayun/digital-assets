import { initTRPC } from "@trpc/server";

const t = initTRPC.context().create();
const router = t.router;
const publicProcedure = t.procedure;
