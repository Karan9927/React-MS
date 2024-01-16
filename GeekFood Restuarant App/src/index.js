import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Quote from "./Components/Pages/Quote";
import Home from "./Components/Pages/Home";
import Restaurant from "./Components/Pages/Restaurant";
import Food from "./Components/Pages/Food";
import Contact from "./Components/Pages/Contact";
import MealInfo from "./Components/Food/MealInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/quote",
    element: <Quote />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/food/:id",
    element: <MealInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
