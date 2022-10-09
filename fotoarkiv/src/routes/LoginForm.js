import { login } from '../services/loginService';
import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = () => {

    let [Account, setAccount] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState('');

    const handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;

        setAccount((prevalue)=> {
            return{
                ...prevalue,
                [name]: value
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(Account);
            window.location = "/";
        } catch(ex) {
            setErrors(ex.response.data);
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Form className="rounded p-4" onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Brugernavn: </Form.Label>
                    <Form.Control type="email" name='email' value={Account.email} placeholder='Indtast Emailadresse' onChange={handleChange}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Adgangskode: </Form.Label>
                    <Form.Control type="password" name="password" value={Account.password} placeholder='Indtast Adgangskode'  onChange={handleChange}/>
                    {errors && <div className='alert alert-danger'>{errors}</div>}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check type="checkbox" label="Husk mig"/>
                </Form.Group>
                <Button variant='primary' type="submit" >Login</Button>
            </Form>
        </div>
    );
}

export default LoginForm;