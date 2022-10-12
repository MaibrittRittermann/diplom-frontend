import {getUsers} from '../services/userService';
import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

const Users = () => {
    
    let [Users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getUsers()
                .then((res) => {
                    setUsers(res.data);
                }).catch((e)=>console.log(e));
        }

        fetchData();
    },[]);
        
    return (
        <Container className='mt-5'>
            <h1>Brugere</h1>
            <LinkContainer to="/user">
                <Button variant="primary" >Opret ny bruger</Button>
            </LinkContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>E-mail</th>
                        <th>Rettigheder</th>
                        <th>Rediger</th>
                        <th>Slet</th>
                    </tr>
                </thead>
                <tbody>

                {Users.map((User, i) =>
                    <tr key={i}>
                        <td><Link to={`/user/${User._id}` }>{User.name}</Link></td>
                        <td><Link to={`/user/${User._id}` }>{User.email}</Link></td>
                        <td><Link to={`/user/${User._id}` }>{User.isAdmin?'Admin':'Bruger'}</Link></td>  
                        <td><Link to={`/user/${User._id}` }><Button variant="primary">Rediger</Button></Link></td>
                        <td><Link to={`/deleteuser/${User._id}/${User.name}` }><Button variant="danger">Slet Bruger</Button></Link></td>                      
                    </tr> 
                )}
                </tbody>
            </Table>
        </Container>
        );
}
 
export default Users;