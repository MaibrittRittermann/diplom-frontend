import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {deleteUser } from '../services/userService';
import { Form, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';

const DeleteUser = () => {

    const id = useParams().id;
    const name = useParams().name;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await deleteUser(id);
            toast(`Bruger ${name} er slettet`);
            navigate('/users');
        } catch(ex) {
            console.log(ex.response.data);
        }
    }

    return ( <Form className="rounded p-4 text-center" onSubmit={handleSubmit} >
        <h1 className="mt-5">Ønsker du virkelig at slette {name}</h1>
        {// TODO: Link fortryd
        }
        <Button variant="danger" type="submit" >Slet {name}</Button>
    </Form> );
}
 
export default DeleteUser;