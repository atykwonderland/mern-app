import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Main.css";

// Bootstrap CSS & JS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components imports
// import CreateBook from "./components/CreateBook";
// import ShowBookList from "./components/ShowBookList";
// import ShowBookDetails from "./components/ShowBookDetails";
// import UpdateBookInfo from "./components/UpdateBookInfo";
import { Home, Login, Signup, Start } from "./pages";

// Routes
const router = createBrowserRouter([
  { path: "/", element: <Start /> },
  { path: "/home", element: <Home /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);