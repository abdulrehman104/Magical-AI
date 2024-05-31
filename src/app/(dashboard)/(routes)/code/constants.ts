import * as z from "zod";

export const firstSchema = z.object({
  prompt: z.string().min(1, {
    message: "Promot is required",
  }),
});
