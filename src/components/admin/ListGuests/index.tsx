import { findAllGuests } from "@/src/lib/queries/guests";
import { ErrorMessage } from "../../ErrorMessage";

export async function ListGuests() {
  let guests;

  try {
    guests = await findAllGuests();
  } catch (error) {
    console.error("Erro ao buscar convidados:", error);

    return (
      <ErrorMessage
        contentTitle="Erro ao se conectar"
        content="Ocorreu um erro ao buscar os convidados. Por favor, tente novamente mais tarde."
      />
    );
  }

  if (guests.length === 0) {
    return (
      <ErrorMessage
        contentTitle="Nenhum convidado encontrado"
        content="Ainda não há convidados cadastrados."
      />
    );
  }

  return (
    <div className="mx-auto! min-h-96 max-h-[60vh] w-full max-w-[80rem] overflow-auto rounded-[12px] bg-white">
      <table className="font-caudex w-full min-w-[20rem] text-center">
        <thead>
          <tr>
            <th className="p-4!">Nome</th>
            <th className="p-4!">Data Confirmação</th>
          </tr>
        </thead>

        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} className=" even:bg-[#eedada]">
              <td className="p-4!">{guest.name}</td>
              <td className="p-4!">
                {guest.confirmedAt
                  ? guest.confirmedAt.toLocaleDateString()
                  : "Não registrada"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
