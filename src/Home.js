import Form from "./components/Form";
import ListCards from "./components/ListCards";
import Paginator from "./components/Paginator";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AppContext } from "./context/AppContext";

const URL_API = "https://api-fifa-21.herokuapp.com/api/v1";

export default function Home() {
  const [radio, setRadio] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const { setPlayers, paginator } = useContext(AppContext);

  function buscarJugadores() {
    if (!busqueda)
      return Swal.fire(
        "Error",
        "Debe ingresar un parametro de busqueda",
        "error"
      );
    setPlayers(null);
    if (radio == 1) {
      axios
        .get(
          `${URL_API}/players?search=${busqueda.toLowerCase()}&page=${
            paginator.page
          }&order=asc`
        )
        .then((result) => {
          if (result.data.items === 0)
            return Swal.fire("Error", "No se encontró información", "error");
          setPlayers(result.data);
        });
    } else {
      axios
        .post(`${URL_API}/team?`, {
          name: busqueda.toLowerCase(),
          page: paginator.page,
        })
        .then((result) => {
          if (result.data.items === 0)
            return Swal.fire("Error", "No se encontró información", "error");
          setPlayers(result.data);
        });
    }
  }

  useEffect(() => {
    if (paginator.page !== 1) {
      buscarJugadores();
    }
  }, [paginator]);

  return (
    <>
      <Form
        radio={radio}
        setRadio={setRadio}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        buscarJugadores={buscarJugadores}
      />
      <ListCards />
      <Paginator buscarJugadores={buscarJugadores} />
    </>
  );
}
