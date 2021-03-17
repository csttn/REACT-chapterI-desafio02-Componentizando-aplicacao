import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";

interface ShowFilmsProviderProps {
  children: ReactNode;
}

interface ShowFilmsContextData {
  genres: GenreResponseProps[];
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export const ShowFilmsContext = createContext({} as ShowFilmsContextData);

export function ShowFilmsProvider({ children }: ShowFilmsProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api
      .get<GenreResponseProps[]>("http://localhost:3333/genres")
      .then((response) => {
        setGenres(response.data);
      });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(
        `http://localhost:3333/movies/?Genre_id=${selectedGenreId}`
      )
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <ShowFilmsContext.Provider
      value={{
        genres,
        movies,
        selectedGenre,
        selectedGenreId,
        handleClickButton,
      }}
    >
      {children}
    </ShowFilmsContext.Provider>
  );
}
