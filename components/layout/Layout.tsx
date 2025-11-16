// components/layout/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// We need to define the 'children' prop for React
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
