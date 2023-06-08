import { createContext,useContext,useState } from "react";

export const userContext = createContext({
    user:null,
    logIn:()=>{},
    logOut:()=>{},
    addUserData:()=>{}
})
const intitalValue = {name:"Guest" , isUserLoggedIn:false}

export function UserContextProvider({children}){
    const [user,setUser]= useState(intitalValue)
    const [existingUserData,setExistingUserData] = useState([{username:"Suneel",password:"Suneel"}])
    
    const logIn = (data)=>{
        if(existingUserData.some(user=>user.username == data.username && user.password == data.password))
       {
        setUser({name:data.username , isUserLoggedIn : true})
        return true
       }
       else{
        alert('please sign up')
        return false
       }
       
    }
    const logOut = ()=>{
        setUser(intitalValue)
    }
    const addUserData = (data)=>{
        setExistingUserData([...existingUserData,{username:data.username,password:data.password}])
    }
    return(
        <userContext.Provider value={{user, logIn, logOut,addUserData}}>
            {children}
        </ userContext.Provider>
    )
}

export function useUserContext (){
    const {user, logIn, logOut,addUserData} = useContext(userContext)
    return {user,logIn,logOut,addUserData}
}