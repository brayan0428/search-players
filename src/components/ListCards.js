import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";

export default function ListCards() {
  const { players } = useContext(AppContext);

  if (!players) return null;

  return (
    <div className="row my-3">
      {players.players.map((player) => (
        <Card key={player._id} {...player} />
      ))}
    </div>
  );
}
