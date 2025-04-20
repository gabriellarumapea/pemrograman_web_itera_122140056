import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../context/BookContext";

const BookFormPage = () => {
  const { addBook, updateBook, books } = useBooks();
  const navigate = useNavigate();
  const { id } = useParams();

  const isEdit = Boolean(id);
  const existingBook = isEdit ? books.find((book) => book.id === Number(id)) : null;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("milik");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEdit && existingBook) {
      setTitle(existingBook.title);
      setAuthor(existingBook.author);
      setStatus(existingBook.status);
    }
  }, [isEdit, existingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError("Semua field wajib diisi");
      return;
    }

    const newBook = {
      id: isEdit ? existingBook.id : Date.now(),
      title,
      author,
      status,
    };

    if (isEdit) {
      updateBook(newBook);
    } else {
      addBook(newBook);
    }

    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? "Edit Buku" : "Tambah Buku"}</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="milik">Milik</option>
          <option value="pinjam">Pinjam</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default BookFormPage;
