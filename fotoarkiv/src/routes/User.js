import React , { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/loginService';
import { getUser, saveUser } from '../services/userService';
import { toast } from 'react-toastify';
import { Form, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const User = props => {

    const [User, setUser] = useState({
        _id: useParams().id,
        name: '',
        email: '',
        password: '',
        isAdmin: false
    });

    const [errors, setErrors] = useState('');

    useEffect(() => {
        editUser();
    }, []);

    async function editUser() {
        if(User._id) getUser(User._id).then(res => 
        {
            const eUser = { _id: res.data._id, name: res.data.name, email: res.data.email, isAdmin: res.data.isAdmin};
            setUser({...eUser});
        });
    }

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
            await saveUser(User);
            toast(`Bruger ${User.name} er oprettet`);

            // TODO : FIX THIS
            props.history.push('/users');
        } catch(ex) {
            setErrors(ex.response.data);
        }
    }

    return ( 
        <div  className="mt-5">
            <h1 className='text-center'>Opret bruger</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <Form className="rounded p-4" onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Fulde navn: </Form.Label>
                        <Form.Control type="name" name='name' value={User.name} placeholder='Indtast navn' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>E-mail adresse: </Form.Label>
                        <Form.Control type="email" name='email' value={User.email} placeholder='Indtast Emailadresse' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>{User._id && 'Ny '} Adgangskode: </Form.Label>
                        <Form.Control type="password" name="password" value={User.password} placeholder='Indtast Adgangskode'  onChange={handleChange}/>
                        {errors && <div className='alert alert-danger'>{errors}</div>}
                    </Form.Group>
                    {getCurrentUser().isAdmin &&(
                        <Form.Group className='mb-3' controlId='formUserAccess'>
                            {/* TODO: opdater select i forhold til state */}
                            <Form.Label>Brugeradgang: </Form.Label>
                            <DropdownButton name="isAdmin" title="Vælg brugeradgang" variant="outline-dark" onSelect={handleSelect}>
                                <Dropdown.Item eventKey={false} active={ User.isAdmin === false ? true:false } >Bruger</Dropdown.Item>
                                <Dropdown.Item eventKey={true} active={ User.isAdmin }>Admin</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>
                    )}
                    
                    <Button variant='primary' type="submit" >Gem Bruger</Button>
                </Form>
            </div>
        </div>
     );
}
 
export default User;