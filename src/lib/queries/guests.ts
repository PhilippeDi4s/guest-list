import { cacheTag } from "next/cache";
import { getDb } from "../db";
import { guests } from "@/src/lib/db/schema";
import { guestResponseDto } from "../form/schema";

export const findAllGuests = async () => {
  "use cache";

  cacheTag("guests");

  const response: guestResponseDto[]= await getDb().select().from(guests)

  return response;
};
