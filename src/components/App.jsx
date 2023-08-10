import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MovieDetails />}/>
      </Routes>
    </>
  );
};
