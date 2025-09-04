"use client";
import GlobalModals from "@/components/GlobalModals";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/contexts/ModalContext";
import { SizeProvider } from "@/contexts/SizeProvider";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <SizeProvider>
          <Header />
          <Toaster position="top-right"/>
          {children}
          <GlobalModals />
          <Footer />
        </SizeProvider>
      </ModalProvider>
    </Provider>
  );
}
