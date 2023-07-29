import { useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { useHistory } from "react-router";

function Logout(){
    const history = useHistory();
    localStorage.removeItem('token')
    
    history.push(`/`)
    window.location.reload(true);
}


export default Logout 