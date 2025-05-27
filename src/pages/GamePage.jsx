import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../Styles/GameCard.css"

export const GamePage = () => {
  const {title} = useParams();
  const {store} = useGlobalReducer();

  const videoGame = store.videoGames.find(g =>
    g.title.replace(/\s+/g, '-').toLowerCase() === title
  );

  return (<>
    <div className="col text-start bg-widget rounded-3 text-light p-3">
      <img src={videoGame.img} className="card-img-top fixed-img" alt="..." />
      <h2>{videoGame.title}</h2>
      <p>{videoGame.text}</p>

    </div>
  </>);
};
