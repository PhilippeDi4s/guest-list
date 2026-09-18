"use client";

import clsx from "clsx";

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  content: React.ReactNode;
};

export function ErrorMessage({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <div className="bg-black/50 w-screen h-screen backdrop-blur-2xl">
      <title>{pageTitle ? pageTitle : "Error"}</title>
      <section
        className={clsx(
          "absolute",
          "top-[40%]",
          "left-[50%]",
          "translate-[-50%]",
          "mx-auto",
          "w-[80%]",
          "min-h-87.5",
          "bg-pink-900",
          "text-white",
          "mb-16",
          "p-8",
          "rounded-xl",
          "flex items-center justify-center",
          "text-center",
        )}
      >
        <div>
          <h1 className="text-7xl/tight mb-4 font-bold">{contentTitle}</h1>
          <div className="mt-16">{content}</div>
        </div>
      </section>
    </div>
  );
}
