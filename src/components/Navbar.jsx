import { Link } from "react-router-dom";
import '.././Styles/main.css'

export const Navbar = () => {

	return (<>
		<nav className="navbar navbar-light bg-widget m-3 rounded-3 d-flex justify-content-between text-light">
			<div className="d-flex justify-content-between align-items-center w-100 px-3">
				<Link to="/">
					<h3 className="text-light text-decoration-none">
						<i className="fa-solid fa-gamepad"></i> <span></span>VG
					</h3>
				</Link>
				<Link to={"/profile/" + "Karolframe"}>
					<h5 className="mt-2 text-light text-decoration-none">
						KarolFrame <i className="fa-solid fa-user"></i>
					</h5>
				</Link>
			</div>
		</nav>
	</>);
};