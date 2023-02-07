import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({
  song,
  setSong,
  setSongs,
  songs,
  rename,
  setRename,
  setMenssage,
}) => {
  const [exists, setExists] = useState(null);

  useEffect(() => {
    const arr = songs.filter((item) => item.id === rename);
    setExists(arr[0]);
  }, [rename]);

  const handleInputSong = (e) => {
    setSong({ ...song, name: e.target.value.trim() });
  };

  const handleAddSong = (e) => {
    e.preventDefault();
    if (!song.name.trim())
      return setMenssage("Por favor ingresa una canción !!");
      const setId ={...song, id: uuidv4()};
    setSongs([...songs, setId]);
    setSong({ id: null, name: "", completed: false });
  };

  const handleInputRename = (e) => {
    setExists({ ...exists, name: e.target.value.trim() });
  };

  const handleClickRename = (e) => {
    e.preventDefault();
    const arr = [...songs];
    const i = arr.findIndex((item) => item.id === exists.id);
    arr[i].name = exists.name;
    setSongs(arr);
    setRename(null);
    setExists(null);
  };

  return (
    <>
      {rename && exists ? (
        <form>
          <input type="text" onInput={handleInputRename} value={exists.name} />
          <button onClick={handleClickRename}>Renombrar Cancion</button>
        </form>
      ) : (
        <form>
          <input
            type="text"
            placeholder="Nombre de la canción"
            onInput={handleInputSong}
            value={song.name}
          />
          <button onClick={handleAddSong}>Agregar una canción</button>
        </form>
      )}
    </>
  );
};
