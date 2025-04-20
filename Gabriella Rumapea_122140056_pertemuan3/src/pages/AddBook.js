import { useNavigate } from "react-router-dom";
import { useBooks } from "../contexts/BookContext";
import BookForm from "../components/BookForm";

const AddBook = () => {
  const { addBook } = useBooks();
  const navigate = useNavigate();

  const handleAdd = (book) => {
    addBook({ ...book, id: Date.now() });
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4">Tambah Buku</h1>
      <BookForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddBook;
