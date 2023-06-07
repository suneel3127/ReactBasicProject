import ContactComponentHeader from "./ContactComponentHeader"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import EditContact from "./EditContact"
import {Routes,Route} from "react-router-dom"

function ContactManager(){
    return(
        <div className="contactContainer">
            <ContactComponentHeader />
            <Routes>
            <Route path="/addcontact" element={<AddContact />}></Route>
            <Route path="/editcontact/:id" element={<EditContact />}></Route>
            <Route path="/contactlist" element={<ContactList />}></Route>
            </Routes>
        </div>
    )
}
export default ContactManager