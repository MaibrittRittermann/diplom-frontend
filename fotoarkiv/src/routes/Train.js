import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { trainModel } from '../services/photoService';

const Train = (props) => {

    const location = useLocation();
    const predictions = location.state.predictions;
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        let labels = e.target.labels.value.split(',');
        labels = labels.map(s => s.trim());
        
        const formData = new FormData();
        formData.append('photo', e.target.photo.value);
        formData.append('labels', labels);
        formData.append('photographerId', props.user.photographerId);
        formData.append('photographer', props.user.name);

        await trainModel(formData);

        // TODO: announce update
    }

    return ( <div className="container" onSubmit={handleSubmit}>

        {predictions.unPredicted&&<h1 className='text-center'>Billeder der mangler søgeord:</h1>}
        {predictions.unPredicted.map((p, key) => 
            <Form onSubmit={handleSubmit}>
                <Card className="m-1 flex-row" key={key}>
                    <Card.Img className="mt-2" style={{ width: '18rem' }} src={p.url} alt={p.name}/>
                    <Card.Body style={{textAlign:'left !important'}}>

                        <div style={{textAlign:'left !important'}} className='text-left'>
                            <h5>{p.name} </h5><br/>
                            <p>
                                Indtast søgeord adskildt af komma:
                            </p>
                            <Form.Control type="input" name="labels" pattern="^[a-zA-Z0-9, ]+$"></Form.Control>
                            <Button type="submit" variant="primary">Gem søgeord</Button>
                            <p className='small'>(Kun tekst og bogstaver)</p>
                            <Form.Control type="hidden" name="photo" value={p.name}></Form.Control> 
                        </div>
                    </Card.Body>
                </Card>
            </Form>
        )}
        
        <hr/>

        {predictions.predicted&&<h1 className='text-center'>Billeder med nye søgeord:</h1>}
        {predictions.predicted.map((p, key) => 
            <Card className="m-1" style={{ width: '18rem' }} key={key}>
                <Card.Img className="mt-2" src={p.url} alt={p.name}/>
                <Card.Body>
                    <Card.Text>
                        {p.name} <br/>
                        Søgeord: {p.predicts.map((s, i) => 
                            <span key={i}>{s} </span>
                        )}
                    </Card.Text>
                    {/* TODO: implement */}
                    <Button type="submit" variant="primary">Rediger søgeord</Button>
                </Card.Body>
            </Card>
        )}
       
    </div> );
}
 
export default Train;