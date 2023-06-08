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
import ContactsStore from "./Redux/ContactsRedux/ContactsStore";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="ui container">
      <Provider store = {ContactsStore}>
      <UserContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/contactmanager/*" element={<ContactManager />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element = {<SignUp/>}></Route>
      </Routes>
      </UserContextProvider>
      </Provider>
    </div>
  );
}

export default App;
