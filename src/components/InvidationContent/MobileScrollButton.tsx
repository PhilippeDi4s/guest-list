"use client";

import { ArrowDownIcon } from "lucide-react";

import styles from "./content-animation.module.css";

export function MobileScrollButton() {
  function scrollToConfirmationForm() {
    document
      .getElementById("confirmation-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <button
      type="button"
      onClick={scrollToConfirmationForm}
      className={styles.mobileScrollButton}
      aria-label="Ir para o formulário de confirmação"
    >
      <ArrowDownIcon className={styles.bouncingArrow} size={20} />
    </button>
  );
}
