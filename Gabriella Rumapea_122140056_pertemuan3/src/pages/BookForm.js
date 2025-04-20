import { useState } from "react";
import { useBooks } from "../contexts/BookContext";
import { useNavigate, useParams } from "react-router-dom";

const BookForm = () => {
  const { id } = useParams();
  const { books, addBook, editBook } = useBooks();
  const navigate = useNavigate();

  const bookToEdit = books.find((b) => b.id === id);
  const [title, setTitle] = useState(bookToEdit?.title || "");
  const [author, setAuthor] = useState(bookToEdit?.author || "");
  const [status, setStatus] = useState(bookToEdit?.status || "milik");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError("Judul dan Penulis harus diisi!");
      return;
    }

    const bookData = { id: id || Date.now().toString(), title, author, status };

    if (bookToEdit) {
      editBook(bookData);
    } else {
      addBook(bookData);
    }

    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        {bookToEdit ? "Edit Buku" : "Tambah Buku"}
      </h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Judul Buku"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="milik">Milik</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {bookToEdit ? "Simpan Perubahan" : "Tambah Buku"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
