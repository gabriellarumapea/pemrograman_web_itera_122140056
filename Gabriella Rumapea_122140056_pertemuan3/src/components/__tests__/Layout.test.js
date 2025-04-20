import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../Layout";
import { BrowserRouter } from "react-router-dom";

test("menampilkan navigasi dan children", () => {
  render(
    <BrowserRouter>
      <Layout>
        <div>Konten Test</div>
      </Layout>
    </BrowserRouter>
  );

  expect(screen.getByText(/tambah buku/i)).toBeInTheDocument();
  expect(screen.getByText("Konten Test")).toBeInTheDocument();
});
