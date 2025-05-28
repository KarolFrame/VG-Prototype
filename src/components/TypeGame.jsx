import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

const TypeGames = ({type}) =>{
    const {store} = useGlobalReducer();
    const topGameCards = store.videoGames.filter(videogame =>{return videogame.type==type;})
    const getIcon =(type)=> {
        switch (type) {
            case "FPS":
                return <i className="fa-solid fa-gun"></i>
            case "Platform":
                return <i className="fa-solid fa-shoe-prints"></i>
            case "RPG":
                return <i className="fa-solid fa-hat-wizard"></i>
            case "Battle Royale":
                return <i className="fa-solid fa-bolt"></i>
            case "Sandbox":
                return <i className="fa-solid fa-cube"></i>
            default:
                return null
        }
    }
    return(<>
    <div className="col text-start bg-widget rounded-3 text-light p-3">
        <h4 className="mx-3">{getIcon(type)} <span> </span>{type}</h4>
        <div className="d-flex gap-3 p-3">
            {topGameCards.map((game, index)=>{
                return <GameCard
                key={index}
                videoGame={game}/>
            })}
        </div>
    </div>
</>)
}

export default TypeGames;