import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input, ctx }) {
      const { t } = ctx;
      const world = t("world");

      return {
        greeting: t("Hello {{world}}", { world: input?.text ?? world }),
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
