import { useBooks } from "../contexts/BookContext";
import BookCard from "../components/BookCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { useFilteredBooks } from "../hooks/useFilteredBooks";
import { useSearchBooks } from "../hooks/useSearchBooks";
import { useState } from "react";

const BookList = () => {
  const [status, setStatus] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = useFilteredBooks(status);
  const searched = useSearchBooks(query, filtered);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>
      <div className="flex gap-4 mb-4 flex-col md:flex-row">
        <SearchBar query={query} setQuery={setQuery} />
        <Filter status={status} setStatus={setStatus} />
      </div>
      {searched.length === 0 ? (
        <p className="text-center mt-4 text-gray-500">Tidak ada buku ditemukan.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searched.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
