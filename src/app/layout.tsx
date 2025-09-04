import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ModalProvider } from "@/contexts/ModalContext";
import GlobalModals from "@/components/GlobalModals";
import { SizeProvider } from "@/contexts/SizeProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ClientLayout from "./clientLayout";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "JulyByOma",
  description: "JulyByOma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.className} antialiased overflow-x-hidden py-6 px-4  md:px-14`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
