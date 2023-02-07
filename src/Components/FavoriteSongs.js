import React from "react";

export const FavoriteSongs = ({ favorite, handleChange, handleClick }) => {
  const elements = favorite.map((song) => (
    <li key={song.id}>
      {song.name}
      <label>
        <input
          type="checkbox"
          checked={song.completed}
          onChange={() => handleChange(song.id)}
        />
        ⬅️🌟
      </label>
      <span onClick={() => handleClick(song.id)}>🚯</span>
    </li>
  ));

  return (
    <>
      {favorite.length ? (
        <>
          <h2> 🌟Canciones Favoritas🌟</h2>
          <ul>{elements}</ul>{" "}
        </>
      ) : (
        <h2>Sin Canciones Favoritas 🌟</h2>
      )}
    </>
  );
};
