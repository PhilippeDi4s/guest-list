import Link from "next/link";
import { ListGuests } from "../../components/admin/ListGuests";

export default function AdminHome() {
  return (
    <>
      <header className="bg-pink-950 p-3! flex gap-6 justify-center items-center">
        <Link href="/" className="font-caudex text-8xl text-orange">20</Link>
      </header>
      <main className="relative min-h-screen  bg-pink-200 px-4! py-10">
        <h1 className="text-4xl font-cocomat text-center m-10!">Confira a lista de convidados</h1>
        <ListGuests />
      </main>
    </>
  );
}
