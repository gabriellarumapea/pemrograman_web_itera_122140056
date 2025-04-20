import { useBooks } from "../context/BookContext";

const useSearchBooks = (query) => {
  const { books } = useBooks();

  if (!query) return books;

  return books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
};

export default useSearchBooks;

export const useSearchBooks = (books, keyword) => {
  return books.filter(book =>
    book.title.toLowerCase().includes(keyword.toLowerCase())
  );
};

