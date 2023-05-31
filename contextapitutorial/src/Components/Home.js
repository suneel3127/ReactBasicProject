import { useUserContext } from "../Context/userContext"

function Home (){
    const {user , logOut} = useUserContext()
    
    return(
        <div className="login">
        <div className="home-profile">
          <div className="ui message success">
            <h3>You are now logged in as , {user.name} </h3>
            
              <button className="ui button blue" onClick={logOut}>
                LogOut
              </button>
          </div>
        </div>
      </div>
    )
}
export default Home