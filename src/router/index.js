import React from "react";
import { Routes, Route } from "react-router-dom";
import { Films } from "../pages/Films";
import { Serial } from "../pages/Serial";
import { Film_detail } from "../pages/Film_detail";
import { Seril_detail } from "../pages/Seril_detail";
import { Person_detail } from "../pages/Person_detail";
import { NotFound } from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/movie-site-react/Films/" element={<Films />} />
      <Route path="/movie-site-react/Films/:id" element={<Film_detail />} />
      <Route path="/movie-site-react/Serial/:id" element={<Seril_detail />} />
      <Route path="movie-site-react/" element={<Serial />} />
      <Route
        path="/movie-site-react/person/:id/:film_id"
        element={<Person_detail />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
