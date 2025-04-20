import { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [status, setStatus] = useState(initialData.status || 'milik');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError('Judul dan Penulis wajib diisi.');
      return;
    }
    onSubmit({ ...initialData, title, author, status });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-xl shadow space-y-4">
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Penulis Buku"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select
        className="w-full p-2 border border-gray-300 rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Simpan
      </button>
    </form>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default BookForm;
