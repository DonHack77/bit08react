import React, { useState, useEffect } from "react";
import { FavoriteSongs } from "./FavoriteSongs";
import { PendingSongs } from "./PendingSongs";

export const Songs = ({ songs, setSongs, setRename, }) => {
  const [pending, setPending] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const pendingArr = [],
      favoriteArr = [];

    for (const element of songs) {
      if (element.completed === true) favoriteArr.push(element);
      else {
        pendingArr.push(element);
      }
    }
    setPending(pendingArr);
    setFavorite(favoriteArr);
    if (songs.length > 0) {
      localStorage.setItem("songs", JSON.stringify(songs));
    };
  }, [songs]);

  const handleChange = (id) => {
    const arr = [...songs];
    const i = arr.findIndex((item) => item.id === id);
    arr[i].completed = !arr[i].completed;
    setSongs(arr);
  };

  const handleClick = (id) => {
    const arr = songs.filter((item) => item.id !== id);
    setSongs(arr);
    if (arr.length === 0) localStorage.removeItem("songs") 
  };

  let output = null;
  if (pending.length || favorite.length) {
    output = (
      <>
        <PendingSongs
          pending={pending}
          handleChange={handleChange}
          handleClick={handleClick}
          setRename={setRename}
        />
        <FavoriteSongs
          favorite={favorite}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </>
    );
  } else {
    output = <h2> 🎼 Sin canciones 🎼</h2>;
  }

  return <>{output}</>;
};
