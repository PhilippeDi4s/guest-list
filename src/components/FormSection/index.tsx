"use client";

import { showMessage } from "@/src/adapters";
import {
  sendFormAction,
  type FormState,
} from "@/src/app/actions/send-form-action";
import { User, Send, AlertCircleIcon } from "lucide-react";
import { useActionState, useEffect, useState } from "react";

const initialState: FormState = {
  success: false,
  message: "",
  error: [],
  formState: "",
};

export function FormSection() {
  const [state, formAction, isPending] = useActionState(
    sendFormAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      showMessage.success(state.message);
      return;
    }
    showMessage.error(state.message);
  }, [state]);
  return (
    <section className="flex bg-white min-h-[80vh] w-full justify-center px-4 lg:min-h-screen lg:w-[50%]">
      <div className="w-full max-w-md rounded-3x p-8! mt-10! lg:mt-0">
        <h2 className="mb-6 text-center text-3xl text-pink-800 font-cocomat">
          Confirme sua presença!
        </h2>

        <form action={formAction} className="flex flex-col gap-4 mt-5!">
          <div>
            <label htmlFor="name" className="sr-only">
              Nome
            </label>
            <div className="mb-2! flex items-center gap-3 rounded-full border border-pink-200 bg-pink-50 px-5! py-4! transition duration-500 ease-in-out focus-within:shadow-[2px_1px_10px_1px_rgba(194,1,58,0.77)]">
              <User className="h-5 w-5 shrink-0 text-pink-300" />

              <input
                defaultValue={state.formState}
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                className="w-full bg-transparent text-pink-900 placeholder:text-pink-300 focus:outline-none font-cocomat"
              />
            </div>
            {state.error?.map((error) => (
              <div className="flex flex-col gap-1 font-poppins" key={error}>
                <span className="text-red-700 flex items-center gap-1">
                  <AlertCircleIcon />
                  {error}
                </span>
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="cursor-pointer flex items-center justify-center gap-2 rounded-full bg-pink-800 py-4! font-bold text-white transition duration-500 hover:bg-pink-900 hover:scale-[1.1]"
          >
            {isPending ? "Enviando..." : "Enviar"}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
