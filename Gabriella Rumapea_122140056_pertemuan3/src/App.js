import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import HomePage from "./pages/HomePage";
import BookFormPage from "./pages/BookFormPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <BookProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<BookFormPage />} />
            <Route path="/edit/:id" element={<BookFormPage />} />
          </Routes>
        </Layout>
      </BookProvider>
    </Router>
  );
};

export default App;
