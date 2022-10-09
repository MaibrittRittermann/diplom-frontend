import {getUsers} from '../services/userService';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
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
        <div>
            <h1>Brugere</h1>
            <LinkContainer to="/createuser">
                <Button type="primary" >Opret ny bruger</Button>
            </LinkContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>E-mail</th>
                        <th>Rettigheder</th>
                    </tr>
                </thead>
                <tbody>

                {Users.map((User, i) =>
                    <tr key={i}>
                        <td><Link to={`/register/${User._id}` }>{User.name}</Link></td>
                        <td><Link to={`/register/${User._id}` }>{User.email}</Link></td>
                        <td><Link to={`/register/${User._id}` }>{User.isAdmin?'Admin':'Bruger'}</Link></td>                        
                    </tr> 
                )}
                </tbody>
            </Table>
        </div>
        );
}
 
export default Users;