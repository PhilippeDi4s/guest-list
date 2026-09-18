"use server";

import { getDb } from "@/src/lib/db";
import { guests } from "@/src/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deleteGuestAction(id: number) {
  if (id === undefined) {
    return {
      success: false,
      error: [],
      message: "Não foi possível deletar",
    };
  }

  if (typeof id !== "number" || !Number.isFinite(id)) {
    return {
      success: false,
      error: [],
      message: "Não foi possível deletar",
    };
  }

  try {
    const deleted = await getDb()
      .delete(guests)
      .where(eq(guests.id, id))
      .returning({ id: guests.id });

    if (deleted.length === 0) {
      return {
        success: false,
        message: "Convidado não encontrado",
      };
    }
    revalidateTag("guests", "max");

    return {
      success: true,
      error: [],
      message: "Convidado deletado com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      error: error,
      message: "Ocorreu um erro",
    };
  }
}
