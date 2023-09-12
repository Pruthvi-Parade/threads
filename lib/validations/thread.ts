import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z
    .string().nonempty()
    .min(3, { message: "Minimum 3 characters." })
    .max(3000, { message: "Maximum 3000 caracters." }),
  accountId: z.string(),
});

export const CommmentValidation = z.object({
    thread: z
      .string().nonempty()
      .min(3, { message: "Minimum 3 characters." })
      .max(100, { message: "Maximum 100 caracters." }),
  });