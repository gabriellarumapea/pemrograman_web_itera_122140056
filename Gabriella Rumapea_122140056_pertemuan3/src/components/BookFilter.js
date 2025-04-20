import React from "react";
import { useBooks } from "../context/BookContext";

const BookFilter = () => {
  const { statusFilter, setStatusFilter } = useBooks();

  const filters = ["all", "milik", "baca", "beli"];

  return (
    <div className="flex gap-2 flex-wrap justify-center md:justify-start mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setStatusFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            statusFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default BookFilter;
