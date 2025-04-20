import PropTypes from "prop-types";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 justify-center">
      {["all", "milik", "baca", "beli"].map((status) => (
        <button
          key={status}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            filter === status
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFilter(status)}
        >
          {status === "all" ? "Semua" : status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  );
};

FilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterBar;
