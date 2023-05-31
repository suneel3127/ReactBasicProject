import { useUserContext } from "../Context/userContext"
import { Navigate } from "react-router-dom"

function ProtectedRoute({children}){
    const {user} = useUserContext()
    if(!user.isUserLoggedIn){
        return <Navigate to="/"></Navigate>
    }
    return children
}
export default ProtectedRoute