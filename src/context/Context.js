import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  function toggleIsFavorite(id) {
    const updatedArray = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(updatedArray);
  }

  return (
    <Context.Provider value={{ allPhotos, toggleIsFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
