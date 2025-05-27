import { useEffect, useState } from "react";
import GameCard from "./GameCard";

const TopGames = () =>{
const [gameCards, setGameCards] = useState([
    {
        title: "Counter-Strike 2",
        text: "The modern evolution of the classic tactical shooter. Counter-Strike 2 brings graphical, physics, and network improvements that elevate the competitive experience while staying true to its strategic gameplay roots.",
        img: "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        date: "Sep 2023"
    },
    {
        title: "Fortnite",
        text: "A cultural phenomenon blending building, shooting, and live events. Fortnite is more than just a battle royale — it's a social platform with concerts, creative modes, and collaborations with major franchises.",
        img: "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg",
        date: "Jul 2017"
    },
    {
        title: "Minecraft",
        text: "An infinite sandbox for building, exploring, and surviving. Minecraft is one of the best-selling and most influential games ever, with a massive community and ongoing updates since its release.",
        img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Minecraft_image1600w.jpg",
        date: "Nov 2011"
    }
]);


    return(<>
    <div className="col text-start bg-widget rounded-3 text-light p-3">
        <h4 className="mx-3"><i className="fa-solid fa-fire"></i> <span> </span>Top Games</h4>
        <div className="d-flex gap-3 p-3">
            {gameCards.map((game, index)=>{
                return <GameCard
                key={index}
                videoGame={game}/>
            })}
        </div>
    </div>
</>)
}

export default TopGames;