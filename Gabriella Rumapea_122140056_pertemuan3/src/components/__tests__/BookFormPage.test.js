import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookCard from "../BookCard";
import { BrowserRouter } from "react-router-dom";
import { BookContext } from "../../context/BookContext";

const mockDeleteBook = jest.fn();

const book = {
  id: 1,
  title: "Buku Test",
  author: "Penulis",
  status: "milik"
};

const renderWithContext = () => {
  return render(
    <BookContext.Provider value={{ deleteBook: mockDeleteBook }}>
      <BrowserRouter>
        <BookCard book={book} />
      </BrowserRouter>
    </BookContext.Provider>
  );
};

test("menampilkan detail buku", () => {
  renderWithContext();
  expect(screen.getByText("Buku Test")).toBeInTheDocument();
  expect(screen.getByText("Penulis")).toBeInTheDocument();
  expect(screen.getByText("milik")).toBeInTheDocument();
});

test("menghapus buku ketika tombol ditekan", () => {
  renderWithContext();
  fireEvent.click(screen.getByText(/hapus/i));
  expect(mockDeleteBook).toHaveBeenCalledWith(1);
});
