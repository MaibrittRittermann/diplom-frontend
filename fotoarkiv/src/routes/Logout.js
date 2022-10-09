import {useEffect} from 'react';
import { logout } from '../services/loginService';

const Logout = () => {

    useEffect(()=> {
        logout();
    })

    return ( null );
}
 
export default Logout;