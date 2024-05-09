import { publicProcedure, router } from "./";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "hello";
  }),
});

export type AppRouter = typeof appRouter;
