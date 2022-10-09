import React from "react";
import { Form, Button } from 'react-bootstrap';

const Search = () => {

    const handleChange = e => {
        console.log(e);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    }


    return ( <React.Fragment>
        <h1>Søg i Fotoarkiv</h1>
        <Form className="rounded p-4" onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Søg: </Form.Label>
                <Form.Control type="search" name='search' placeholder='Indtast søgeord/sætning' onChange={handleChange}/><Button variant='primary' type="submit" >Opret</Button>
            </Form.Group>
        </Form>
    </React.Fragment> );
}
 
export default Search;