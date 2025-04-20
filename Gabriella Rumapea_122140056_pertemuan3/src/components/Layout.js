import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="p-4 max-w-5xl mx-auto">{children}</main>
    </>
  );
};

export default Layout;
