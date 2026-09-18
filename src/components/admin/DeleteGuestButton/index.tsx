"use client";

import { showMessage } from "@/src/adapters";
import { deleteGuestAction } from "@/src/app/actions/delete-guest-action";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function DeleteGuestButton({ guestId }: { guestId: number }) {
  const router = useRouter();
  async function handleDeleteUser() {
    const confirmed = window.confirm(
      "Tem certeza que deseja deletar este convidado?",
    );

    if (!confirmed) {
      return;
    }

    const res = await deleteGuestAction(guestId);

    if (!res.success) {
      showMessage.error(res.message);
      return;
    }

    showMessage.success(res.message);
    router.refresh();
  }

  return (
    <button
      className="cursor-pointer transition hover:scale-[1.2]"
      onClick={handleDeleteUser}
    >
      <TrashIcon color="red" />
    </button>
  );
}
