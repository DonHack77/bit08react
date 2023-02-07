import React from "react";

export const PendingSongs = ({
  pending,
  handleChange,
  handleClick,
  setRename,
}) => {
  const elements = pending.map((song) => (
    <li key={song.id}>
      {song.name}
      <label>
        <input
          type="checkbox"
          checked={song.completed}
          onChange={() => handleChange(song.id)}
        />
        🌟
      </label>
      <span onClick={() => setRename(song.id)}>📃</span>
      <span onClick={() => handleClick(song.id)}>🚯</span>
    </li>
  ));

  return (
    <>
      {pending.length ? (
        <>
          <h2> 🧑‍🎤Canciones para escuchar🧑‍🎤</h2>
          <ul>{elements}</ul>{" "}
        </>
      ) : (
        <h2>Sin canciones para escuchar🧑‍🎤</h2>
      )}
    </>
  );
};
