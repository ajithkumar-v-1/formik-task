//Importing App.jsx stylesheet
import "./App.css";

//Importing Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//Importing react-router-dom components
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importing other necessary child components
import BooksList from "./components/Book_Components/BooksList";
import AuthorsList from "./components/Author_Components/AuthorsList";
import AddBookForm from "./components/Book_Components/AddBookForm";
import ModifyBooks from "./components/Book_Components/ModifyBooks";
import EditBookForm from "./components/Book_Components/EditBookForm";
import AddAuthorForm from "./components/Author_Components/AddAuthorForm";
import ModifyAuthors from "./components/Author_Components/ModifyAuthors";
import EditAuthorForm from "./components/Author_Components/EditAuthorForm";
import Navbar from "./components/Basic_Components/Navbar";
import Footer from "./components/Basic_Components/Footer";

function App() {
  return (
    <>
      {/* Navigating one element to another element using react-router-dom */}
      <BrowserRouter>
        <Navbar />
        <h1 className="py-2 main-head text-center text-white">
          Library Management System
        </h1>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/add-book-form" element={<AddBookForm />} />
          <Route path="/modify-books" element={<ModifyBooks />} />
          <Route path="/edit-book-form/:id" element={<EditBookForm />} />
          <Route path="/authors" element={<AuthorsList />} />
          <Route path="/add-author-form" element={<AddAuthorForm />} />
          <Route path="/modify-authors" element={<ModifyAuthors />} />
          <Route path="/edit-author-form/:id" element={<EditAuthorForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
