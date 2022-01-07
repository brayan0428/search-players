export default function Form({
  radio,
  setRadio,
  busqueda,
  setBusqueda,
  buscarJugadores,
}) {
  return (
    <>
      <h1>Buscar Jugadores</h1>
      <hr />
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="1"
              checked={radio == 1}
              onChange={(e) => setRadio(e.target.value)}
            />
            Buscar por nombre
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-check col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="2"
              checked={radio == 2}
              onChange={(e) => setRadio(e.target.value)}
            />
            Buscar por equipo
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="text"
            placeholder="Introducir busqueda..."
            className="form-control"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <button
            className="btn btn-primary w-100 mt-2"
            onClick={buscarJugadores}
          >
            Buscar
          </button>
        </div>
      </div>
    </>
  );
}
