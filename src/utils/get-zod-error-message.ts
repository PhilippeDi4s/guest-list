import { z } from "zod";
export function getZodErrorMessages(error: z.ZodError): string[] {
  return error.issues.map((issue) => issue.message);
}
