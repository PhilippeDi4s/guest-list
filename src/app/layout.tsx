import type { Metadata } from "next";
import { Caudex, Poppins } from "next/font/google";
import { brittanySignature, cocomat, farmhouse } from "./fonts";
import "./globals.css";
import { ToastifyContainer } from "../components/MessageContainer";

const caudex = Caudex({
  weight: "400",
  variable: "--font-caudex",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  variable: "--font-popins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Confirme sua Presença",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={` ${caudex.variable} ${poppins.variable} ${brittanySignature.variable} ${cocomat.variable} ${farmhouse.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastifyContainer>{children}</ToastifyContainer>
      </body>
    </html>
  );
}
