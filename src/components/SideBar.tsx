import React, { useContext } from "react";
import { Button } from "./Button";
import { ShowFilmsContext } from "../context/ShowFilmsContext";

interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

import "../styles/sidebar.scss";

export function SideBar() {
  const { genres, handleClickButton, selectedGenreId } = useContext(
    ShowFilmsContext
  );
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: Genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
