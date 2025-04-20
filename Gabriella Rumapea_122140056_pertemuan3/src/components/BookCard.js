import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useBooks } from '../context/BookContext';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const { deleteBook } = useBooks();

  return (
    <div className="bg-white shadow p-4 rounded-xl flex justify-between items-start gap-4">
      <div>
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-700 text-sm">{book.author}</p>
        <p className="text-xs italic text-gray-500">{book.status}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => navigate(`/edit/${book.id}`)}
          className="text-blue-500 text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => deleteBook(book.id)}
          className="text-red-500 text-sm"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
