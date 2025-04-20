import React, { createContext, useContext, useState, useEffect } from 'react';

// Buat context
const BookContext = createContext();

// Custom hook untuk akses context
export const useBooks = () => useContext(BookContext);

// Provider
export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');

  // Load data dari localStorage saat awal
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  // Simpan ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  // Tambah buku
  const addBook = (book) => {
    const newBook = { ...book, id: Date.now().toString() };
    setBooks((prev) => [...prev, newBook]);
  };

  // Update buku
  const updateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };  

  // Hapus buku
  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        deleteBook,
        statusFilter,
        setStatusFilter, // Penting agar tombol filter bisa berfungsi
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
