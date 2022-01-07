export default function Card({ name, position, nation, team }) {
  return (
    <div className="col-md-4">
      <div className="card m-1">
        <img
          src="https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg"
          className="card-img-top"
          alt="Profile"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text m-0">
            <b>Posición:</b> {position}
          </p>
          <p className="card-text m-0">
            <b>Nacionalidad:</b> {nation}
          </p>
          {team && (
            <p className="card-text m-0">
              <b>Equipo:</b> {team}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
