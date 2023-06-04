import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCats,
  getErrors,
  getLoading,
} from "../../features/cat/catSelectors";
import { addToFavorites, getCatsFetch } from "../../features/cat/catState";
import { CatType } from "../../constants/genericTypes";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const cats = useSelector(getCats);
  const loading = useSelector(getLoading);
  const error = useSelector(getErrors);

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  const handleAddToFavorites = (cat: CatType) => {
    dispatch(addToFavorites(cat));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <Link to={"/favorites"}>Favorites</Link>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure.
      </p>
      <hr />
      <div className="gallery">
        {cats.map((cat: CatType) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              {/* <img src={cat.image.url} alt={cat.name} width="200" height="100"/> */}
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
            <button onClick={() => handleAddToFavorites(cat)}>
              Add to favorites
            </button>
          </div>
        ))}
      </div>
      <button>VIEW MORE CATS</button>
    </div>
  );
};

export default Home;
