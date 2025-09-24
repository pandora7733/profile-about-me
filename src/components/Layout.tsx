import React from 'react';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="pt-14">
        {children}
      </main>
      <Footer />
    </div>
  );
}