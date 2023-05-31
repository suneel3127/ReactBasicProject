import { useContext } from "react"
import { useUserContext } from "../Context/userContext"

function Header (){
    const {user , logOut} = useUserContext()
    return(
        <div className="ui fixed menu">
      <div className="ui container center">
        <h2>React App Tutorial</h2>
        <div className="profile">
          <h3>Welcome, {user.name}</h3>
            {user.isUserLoggedIn?<button className="ui button blue" onClick={logOut}>
              LogOut
            </button>:""}
            
        </div>
      </div>
    </div>
    )
}
export default Header