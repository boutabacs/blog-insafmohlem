import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AuthorPage from "./pages/AuthorPage";
import CreateArticle from "./pages/CreateArticle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateArticle />} />
        <Route path="/author/:name" element={<AuthorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
