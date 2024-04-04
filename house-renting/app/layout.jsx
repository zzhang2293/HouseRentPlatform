import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import footer from "@/components/Footer";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find, rentals, find properties, find hosue",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <div>
            <Navbar />
            <main>{children}</main>
            <Footer></Footer>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
