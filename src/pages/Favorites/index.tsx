import React from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "../../features/cat/catSelectors";
import { CatType } from "../../constants/genericTypes";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector(getFavorites);

  return (
    <div className="App">
      <h1>FAVORITES</h1>
      <Link to={"/"}>Home</Link>
      <hr />
      <div className="gallery">
        {favorites.map((cat: CatType) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              {/* <img src={cat.image.url} alt={cat.name} width="200" height="100"/> */}
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
