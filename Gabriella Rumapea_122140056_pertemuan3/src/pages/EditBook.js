import { useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../contexts/BookContext";
import BookForm from "../components/BookForm";

const EditBook = () => {
  const { id } = useParams();
  const { books, editBook } = useBooks();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === Number(id));

  const handleEdit = (updated) => {
    editBook(updated);
    navigate("/");
  };

  if (!book) {
    return <p className="text-center mt-4">Buku tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-xl font-bold mb-4">Edit Buku</h1>
      <BookForm onSubmit={handleEdit} initialData={book} />
    </div>
  );
};

export default EditBook;
