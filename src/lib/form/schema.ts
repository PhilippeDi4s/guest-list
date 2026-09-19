import z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
    .max(300, { message: "Nome deve ter no máximo 100 caracteres" })
    .trim()
    .regex(/^[A-Za-zÀ-ÿ ]+$/, {
      message: "Caractere inválido",
    }),
});

export const guestResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  confirmedAt: z.date().nullable(),
});

export type guestResponseDto = z.infer<typeof guestResponseSchema>;
