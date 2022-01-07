import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Paginator({ buscarJugadores }) {
  const { paginator, setPaginator, players } = useContext(AppContext);

  if (!players) return null;

  function prev() {
    const nextPage = paginator.prevPage;
    if (nextPage == 1) {
      setPaginator({ nextPage: nextPage + 1, prevPage: null, page: nextPage });
    } else {
      setPaginator({
        nextPage: paginator.nextPage - 1,
        prevPage: nextPage - 1,
        page: nextPage,
      });
    }
  }

  function next() {
    const nextPage = paginator.nextPage;
    if (nextPage == players.totalPages) {
      setPaginator({ prevPage: nextPage - 1, nextPage: null, page: nextPage });
    } else {
      setPaginator({
        prevPage: (paginator.prevPage || 0) + 1,
        nextPage: nextPage + 1,
        page: nextPage,
      });
    }
  }

  return (
    <div className="col-md-12 d-flex justify-content-center my-3">
      <button
        className="btn btn-primary mx-3"
        disabled={!paginator.prevPage}
        onClick={prev}
      >
        Anterior
      </button>
      <button
        className="btn btn-primary"
        disabled={!paginator.nextPage}
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
}
