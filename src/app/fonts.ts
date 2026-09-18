import localFont from "next/font/local";

export const brittanySignature = localFont({
  src: "./fonts/brittany-signature-font/BrittanySignature-MaZx.ttf",
  variable: "--font-brittany",
});

export const cocomat = localFont({
  src: [
    {
      path: "./fonts/cocomat/Cocomat Light-trial.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/cocomat/Cocomat Ultralight-trial.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-cocomat",
});

export const farmhouse = localFont({
  src: "./fonts/farmhouse_16/Farmhouse.otf",
  variable: "--font-farmhouse",
});
