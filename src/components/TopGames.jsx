import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

const TopGames = () =>{
const {store} = useGlobalReducer();
const topGameCards = store.videoGames.filter(videogame =>{return videogame.top<=3;})

    return(<>
    <div className="col text-start bg-widget rounded-3 text-light p-3">
        <h4 className="mx-3"><i className="fa-solid fa-fire"></i> <span> </span>Top Games</h4>
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

export default TopGames;