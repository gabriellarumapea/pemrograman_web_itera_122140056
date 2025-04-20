import React from "react";
import { useBooks } from "../context/BookContext";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, statusFilter } = useBooks();

  const filteredBooks = books.filter((book) =>
    statusFilter === "all" ? true : book.status === statusFilter
  );

  return (
    <div>
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada buku yang cocok.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
