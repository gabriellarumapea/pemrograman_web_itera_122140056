import { useBooks } from "../context/BookContext";

const useFilteredBooks = () => {
  const { books, statusFilter } = useBooks();

  if (statusFilter === "all") return books;

  return books.filter((book) => book.status === statusFilter);
};

export default useFilteredBooks;
