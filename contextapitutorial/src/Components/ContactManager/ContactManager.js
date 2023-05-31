import ContactComponentHeader from "./ContactComponentHeader"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import EditContact from "./EditContact"
import { ContactContextProvider } from "../../Context/contactContext"
import {Routes,Route} from "react-router-dom"

function ContactManager(){
    return(
        <div className="contactContainer">
            <ContactContextProvider>
            <ContactComponentHeader />
            <Routes>
            <Route path="/addcontact" element={<AddContact />}></Route>
            <Route path="/editcontact/" element={<EditContact />}></Route>
            <Route path="/contactlist" element={<ContactList />}></Route>
            </Routes>
            </ContactContextProvider>
        </div>
    )
}
export default ContactManager