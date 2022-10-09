import React from 'react';
import { useState } from 'react';
import { getCurrentUser, loginWithJWT } from '../services/loginService';
import { saveUser } from '../services/userService';
import { Form, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import { toast } from 'react-toastify';

const CreateUser = () => {

    const [User, setUser] = useState({
        name: '',
        email: '',
        password: '',
        isAdmin: false
    });
    const [errors, setErrors] = useState('');

    const handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;

        setUser((prevalue)=> {
            return{
                ...prevalue,
                [name]: value
            }
        });
    }

    const handleSelect = e => {
        setUser({...User, isAdmin: e});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await saveUser(User);
            toast(`Bruger ${User.name} er oprettet`);
            // Todo : send retur til liste/oversigt
        } catch(ex) {
            setErrors(ex.response.data);
        }
    }

    return ( 
        <div>
            <h1>Opret bruger</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <Form className="rounded p-4" onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Navn: </Form.Label>
                        <Form.Control type="name" name='name' value={User.name} placeholder='Indtast navn' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" name='email' value={User.email} placeholder='Indtast Emailadresse' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Adgangskode: </Form.Label>
                        <Form.Control type="password" name="password" value={User.password} placeholder='Indtast Adgangskode'  onChange={handleChange}/>
                        {errors && <div className='alert alert-danger'>{errors}</div>}
                    </Form.Group>
                    {getCurrentUser().isAdmin &&(
                        <Form.Group className='mb-3' controlId='formUserAccess'>
                            {/* TODO: opdater select i forhold til state */}
                            <Form.Label>Brugeradgang: </Form.Label>
                            <DropdownButton name="isAdmin" title="Vælg brugeradgang" onSelect={handleSelect}>
                                <Dropdown.Item eventKey={false}>Bruger</Dropdown.Item>
                                <Dropdown.Item eventKey={true}>Admin</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>
                    )}
                    {!getCurrentUser() && <input type="hidden" value={User.isAdmin} name="isAdmin"/>}
                    <Button variant='primary' type="submit" >Opret</Button>
                </Form>
            </div>
        </div>
     );
}
 
export default CreateUser;