import React from "react";
import BookFilter from "../components/BookFilter";
import BookList from "../components/BookList";

const HomePage = () => {
  return (
    <div className="p-4">
      <BookFilter />
      <BookList />
    </div>
  );
};

export default HomePage;
