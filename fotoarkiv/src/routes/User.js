import React , { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/loginService';
import { getUser, saveUser } from '../services/userService';
import { toast } from 'react-toastify';
import { Form, Button} from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const User = () => {

    const [User, setUser] = useState({
        _id: useParams().id,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photographerId: '',
        isAdmin: false
    });

    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        editUser();
    }, []);

    async function editUser() {
        if(User._id) getUser(User._id)
            .then(res => {
                const eUser = { 
                    _id: res.data._id, 
                    name: res.data.name, 
                    email: res.data.email, 
                    isAdmin: res.data.isAdmin, 
                    photographerId: res.data.photographerId, 
                };
                setUser({...eUser});
            })
            .catch(err => { toast.err(`Der opstod en fejl: ${err}`)}); 
    }

    const handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;
        setUser((prevalue)=> { return { ...prevalue, [name]: value }});
    }

    const validateInput = e => {
        const {name, value} = e.target;
        if (!value)
            setErrors(`Indtast værdi i ${name}`);
        else if(name === 'confirmPassword' && User.password !== value)
            setErrors(`Adgangskoder matcher ikke`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await saveUser(User);
            toast(`Bruger ${User.name} er gemt`);
            navigate('/users');
        } catch(ex) {
            setErrors(ex.response.data);
        }
    }

    return ( 
        <div  className="mt-5">
            {User._id && <h1 className='text-center'>Rediger bruger</h1>}
            {!User._id && <h1 className='text-center'>Opret bruger</h1>}
            <div className='d-flex justify-content-center align-items-center'>
                <Form className="rounded p-4" onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Fulde navn: </Form.Label>
                        <Form.Control type="text" name='name' value={User.name} placeholder='Indtast navn' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>E-mail adresse: </Form.Label>
                        <Form.Control type="email" name='email' value={User.email} placeholder='Indtast Emailadresse' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>{User._id && 'Ny '} Adgangskode: </Form.Label>
                        <Form.Control type="password" name="password" value={User.password} placeholder='Indtast Adgangskode'  onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formSecPassword'>
                        <Form.Label>{User._id && 'Ny '} Gentag kode: </Form.Label>
                        <Form.Control type="password" name="confirmPassword" value={User.confirmPassword} placeholder='Indtast Adgangskode igen'  onChange={handleChange} onBlur={validateInput}/>
                        {errors && <div className='alert alert-danger'>{errors}</div>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formUserId'>
                        <Form.Label>{User._id && 'Ny '} Bruger Id: </Form.Label>
                        <Form.Control type="number" name="photographerId" value={User.photographerId} placeholder='Bruger ID'  onChange={handleChange}/>
                    </Form.Group>
                    {getCurrentUser().isAdmin &&(
                        <Form.Group className='mb-3' controlId='formUserAccess'>
                            <Form.Label>Brugeradgang: </Form.Label>
                            <select name="isAdmin" onChange={handleChange}>
                                <option value={false}>Bruger</option>
                                <option value={true}>Admin</option>
                            </select>
                        </Form.Group>
                    )} 
                    <div className='text-center'>                   
                        <Button variant='primary' type="submit" >Gem Bruger</Button>
                    </div>
                </Form>
            </div>
        </div>
     );
}
 
export default User;