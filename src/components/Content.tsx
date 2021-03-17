import React from "react";

import { MovieCard } from "./MovieCard";

import { useContext } from "react";
import { ShowFilmsContext } from "../context/ShowFilmsContext";

import "../styles/content.scss";
import Header from "./Header";

export const Content: React.FC = () => {
  const { movies } = useContext(ShowFilmsContext);
  return (
    <div className="container">
      <Header />
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </div>
  );
};
