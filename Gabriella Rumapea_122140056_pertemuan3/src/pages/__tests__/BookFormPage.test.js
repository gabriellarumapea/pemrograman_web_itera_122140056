// src/pages/__tests__/BookFormPage.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookFormPage from "../BookFormPage";
import { BrowserRouter } from "react-router-dom";
import BookContext from "../../context/BookContext";

const mockAddBook = jest.fn();

const renderForm = () =>
  render(
    <BookContext.Provider value={{ books: [], addBook: mockAddBook, updateBook: jest.fn() }}>
      <BrowserRouter>
        <BookFormPage />
      </BrowserRouter>
    </BookContext.Provider>
  );

test("menampilkan form tambah buku", () => {
  renderForm();
  expect(screen.getByPlaceholderText(/judul/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/penulis/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /simpan/i })).toBeInTheDocument();
});
