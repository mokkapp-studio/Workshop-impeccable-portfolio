import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Cabecera } from "./_components/Cabecera";
import { Campo } from "./_components/Campo";
import "./globals.css";
import "./obra.css";
import "./caso.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Xavier Pascual · Diseño de producto para sistemas complejos",
    template: "%s · Xavier Pascual",
  },
  description:
    "Portfolio de Xavier Pascual, product designer especializado en sistemas complejos: flujos densos, herramientas B2B y sistemas de diseño a escala.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={archivo.variable}>
      <body>
        <Campo />
        <Cabecera />
        {children}
      </body>
    </html>
  );
}
