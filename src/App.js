import "./App.css";
import { Button } from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Form } from "./Components/Form";
import { Songs } from "./Components/Songs";

function App() {
  const [song, setSong] = useState({ id: null, name: "", completed: false });
  const [songs, setSongs] = useState([]);
  const [rename, setRename] = useState(null);
  const [menssage, setMenssage] = useState("Ingresa una canción")

  useEffect(() => {
    if (localStorage.getItem("songs")) {
      setSongs(JSON.parse(localStorage.getItem("songs")))
    }
  }, [])
  

  return (
    <>
      <h1>Lista de canciones</h1>
      <p>{menssage}</p>
      <Form
        song={song}
        setSong={setSong}
        setSongs={setSongs}
        songs={songs}
        rename={rename}
        setRename={setRename}
        setMenssage={setMenssage}
      />
      <Songs songs={songs} setSongs={setSongs} setRename={setRename} />
    </>
  );
}

export default App;
