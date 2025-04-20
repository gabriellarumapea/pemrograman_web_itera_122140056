import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

test("render halaman Home sebagai default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/daftar buku/i)).toBeInTheDocument(); // sesuaikan dengan tampilan homepage kamu
});
