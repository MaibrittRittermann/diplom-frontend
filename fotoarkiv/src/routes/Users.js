import {getUsers} from '../services/userService';
import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';

const Users = () => {
    
    let [Users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        await getUsers()
            .then((res) => { setUsers(res.data); })
            .catch((err)=>toast.err(`Der opstod en fejl: ${err}`)); 
    }
        
    const handleCreate = () => {
        navigate("/user");
    }

    return (
        <Container className='mt-5'>
            <h1>Brugere</h1>
            <div className='text-center'>
                <Button variant="primary" name="new" onClick={handleCreate}>Opret ny bruger</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th className='text-start'>Navn</th>
                        <th className='text-start'>E-mail</th>
                        <th className='text-start'>Rettigheder</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                {Users.map((User, i) =>
                    <tr key={i}>
                        <td><Link to={`/user/${User._id}` }>{User.name}</Link></td>
                        <td><Link to={`/user/${User._id}` }>{User.email}</Link></td>
                        <td><Link to={`/user/${User._id}` }>{User.isAdmin?'Admin':'Bruger'}</Link></td>  
                        <td className='text-end'><Link to={`/user/${User._id}` }><Button variant="primary">Rediger</Button></Link></td>
                        <td className='text-end'><Link to={`/deleteuser/${User._id}/${User.name}` }><Button variant="danger">Slet</Button></Link></td>                      
                    </tr> 
                )}
                </tbody>
            </Table>
        </Container>
        );
}
 
export default Users;