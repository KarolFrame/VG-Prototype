import React from "react";
import "../Styles/GameCard.css"
import { Link } from "react-router-dom";

const GameCard = ({videoGame}) =>{
    return(<>
    <div className="card text-light">
        <img src={videoGame.img} className="card-img-top fixed-img" alt="..." />
        <div className="card-body">
            <Link to={`/game/${videoGame.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <h5 className="card-title">{videoGame.title}</h5>
            </Link>
            <p className="card-text">
                {videoGame.text}
            </p>
        </div>
        <div className="card-footer ">
            <small className="text-secondary">{videoGame.date}</small>
        </div>
    </div>
    </>)
}

export default GameCard;

