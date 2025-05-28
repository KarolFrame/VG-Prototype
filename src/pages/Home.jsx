import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import TopGames from "../components/TopGames.jsx";
import TypeGames from "../components/TypeGame.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (<>
		<div className="col text-center d-flex flex-column gap-3 p-0">
			<TopGames/>
			{store.videogamesTypes.map((type, index)=>{
                return <TypeGames
                key={index}
                type={type}/>
            })}
		</div>
	</>);
}; 