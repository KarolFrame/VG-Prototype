import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import TopGames from "../components/TopGames.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (<>
		<div className="col text-center d-flex flex-column gap-3">
			<TopGames/>
			<TopGames/>
		</div>
	</>);
}; 