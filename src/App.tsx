import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";
import Footer from "./sections/Footer";
import Background from "./components/Background";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./scss/index.scss";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { clearToasts } from "./app/slices/AppSlice";

function App() {
  const { toasts } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 200,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      toasts.forEach((message: string) => {
        toast(message, toastOptions);
      });
      dispatch(clearToasts());
    }
  }, [toast, dispatch]);

  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon/:id" />
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
