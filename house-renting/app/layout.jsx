import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import footer from "@/components/Footer";
import Footer from "@/components/Footer";
export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find, rentals, find properties, find hosue",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
