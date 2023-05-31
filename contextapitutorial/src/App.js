import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { UserContextProvider } from './Context/userContext';
import LoginForm from "./Components/Login/LoginForm";
import Home from "./Components/Home";
import SignUp from './Components/Login/SignUp';
import{Routes,Route} from "react-router-dom"
import ProtectedRoute from './Routes/ProtectedRoute';
import ContactManager from './Components/ContactManager/ContactManager';

function App() {
  return (
    <div className="ui container">
      <UserContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/home/*" element={<ContactManager />}></Route>
        <Route path="/signup" element = {<SignUp/>}></Route>
      </Routes>
      </UserContextProvider>
     
    </div>
  );
}

export default App;
