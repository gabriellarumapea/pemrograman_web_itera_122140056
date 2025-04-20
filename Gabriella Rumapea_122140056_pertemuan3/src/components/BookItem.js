import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BookItem = ({ book, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded-lg shadow bg-white flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        <p className="italic text-sm text-blue-500">{book.status}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => navigate(`/edit/${book.id}`)}
          className="text-sm text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookItem;
