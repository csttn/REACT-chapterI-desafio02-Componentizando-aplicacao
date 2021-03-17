import React from "react";
import { useContext } from "react";
import { ShowFilmsContext } from "../context/ShowFilmsContext";

const Header: React.FC = () => {
  const { selectedGenre } = useContext(ShowFilmsContext);

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
};

export default Header;
