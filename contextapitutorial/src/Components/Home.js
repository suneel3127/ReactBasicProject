import { useUserContext } from "../Context/userContext";
import { Link } from "react-router-dom";

function Home (){
    const {user , logOut} = useUserContext()
    
    return(
      <div className="HomeContainer">
        <h1 className="ProjectsHeader">Projects</h1>
        <div className="Home">
        <div className="ContactContainer">
        <Link to="/contactmanager">Contact Manager</Link>
        </div>
        <div className="MovieContainer">
        <Link to="/home/movie">Movie Manager</Link>
        </div>
        </div>
      </div>
    )
}
export default Home