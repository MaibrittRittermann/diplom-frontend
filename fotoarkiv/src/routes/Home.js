import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from "react-bootstrap";

const Home = ({user}) => {

    const navigate = useNavigate();
    let [Search, setSearch] = useState({search: ''});

    const handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;
        setSearch((prevalue)=> { return { ...prevalue, [name
        ]: value }});
        console.log("change : " + Search.search);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            navigate(`/result/${Search.search}`);
        } catch(ex) {
            console.log(ex);
        }
    }

    return ( 
        <React.Fragment>
            <header className="App-header">
                <h1 className="py-5">Mediehusenes Fotoarkiv</h1>
            </header>
            <Container className="py-5 text-center">
                {!user && <h1>Du skal logge ind for at benytte denne service</h1>}
                {user && <Form className="rounded p-4" onSubmit={handleSubmit}>
                        <h1>Find fotos i fotoarkivet:</h1>
                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Control type="search" name='search' placeholder='Indtast søgeord' onChange={handleChange}/>
                            <Button variant='primary' type="submit" name="seek">Søg</Button>
                        </Form.Group>
                    </Form>
                }
            </Container>
        
    </React.Fragment> );
}
 
export default Home;