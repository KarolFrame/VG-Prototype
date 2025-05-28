import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../Styles/GameCard.css"

export const Profile = props => {

  const { store } = useGlobalReducer()

  const { theId } = useParams()

  return (
    <div className="container col text-start bg-widget rounded-3 p-3 text-light">
      <div className="banner-container position-relative">
        <img className="fixed-img rounded-3" src="https://sm.ign.com/t/ign_es/screenshot/default/tlou2-wp-duality-1920x1080-002b-1_cz37.1280.jpg" />
        <img className="profile-img rounded-5" src="https://image.api.playstation.com/cdn/UP9000/CUSA07820_00/c8GRTScuiwewlzKjs6B0vNIgEGlcaQ05.png?w=440&thumb=false" />
      </div>
      <div className="row d-flex justify-content-between">
        <h3 className="col-auto">KarolFrame</h3>
        <button className="col-auto mx-3 my-button rounded-3 text-light">Edit Profile</button>
      </div>
      
    </div>
  );
};

Profile.propTypes = {
  match: PropTypes.object
};
