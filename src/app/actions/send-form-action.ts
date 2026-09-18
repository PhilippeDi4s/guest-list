"use server";

import { getDb } from "@/src/lib/db";
import { guests } from "@/src/lib/db/schema";
import { getZodErrorMessages } from "@/src/utils/get-zod-error-message";
import { formSchema } from "../../lib/form/schema";
import { revalidateTag } from "next/cache";

export type FormState = {
  success: boolean;
  error?: string[];
  message: string;
  formState: string;
};

export async function sendFormAction( _previousState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name");

  if (typeof name !== "string") {
    return {
      success: false,
      message: "Nome inválido",
      error: ["Nome inválido"],
      formState: "",
    };
  }

  const parsed = formSchema.safeParse({name});

  if (!parsed.success) {
    return {
      success: false,
      error: getZodErrorMessages(parsed.error),
      message: "Nome inválido",
      formState: name,
    };
  }

  await getDb().insert(guests).values({ name: parsed.data.name });

  revalidateTag("guests", "max")

  return {
    success: true,
    message: "Presença confirmada!",
    error: [],
    formState: "",
  };
}
