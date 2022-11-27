import React, {useEffect, useState} from 'react';
import { Form, CardGroup, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { trainModel } from '../services/photoService';
import { getPhoto } from "../services/photoService";
import { toast } from 'react-toastify';

const Train = (props) => {

    const location = useLocation();
    let predictions = location.state.predictions;
    let [saveLabels, setSaveLabels] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            await Promise.all(predictions.predicted.map(async(p, i) => {
                let photo = await getPhoto(p.name);
                let url = URL.createObjectURL(photo.data);
                predictions.predicted[i].urlLocal = url;
            }));
            await Promise.all(predictions.unPredicted.map(async(p, i) => {
                let photo = await getPhoto(p.name);
                let url = URL.createObjectURL(photo.data);
                predictions.unPredicted[i].urlLocal = url;
            }));
        }
        fetchData();
    },[saveLabels]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let labels = e.target.labels.value.split(',');
        labels = labels.map(s => s.trim());
        
        const formData = new FormData();
        formData.append('photo', e.target.photo.value);
        formData.append('labels', labels);
        formData.append('photographerId', props.user.photographerId);
        formData.append('photographer', props.user.name);

        const trained = await trainModel(formData);

        const nowLabeled = predictions.unPredicted.filter(x => x.name === e.target.photo.value);
        predictions.predicted.push({...nowLabeled[0], predicts: labels });
        predictions.unPredicted.splice(predictions.unPredicted.indexOf(nowLabeled[0]), 1);
        setSaveLabels(saveLabels+1);


        if (trained.labeled === true)
            toast.message(`${e.target.photo.value} er gemt med søgeord ${labels}`);
    }

    return ( <div className="container" onSubmit={handleSubmit}>

        {(predictions.unPredicted.length>0)&&<h1 className='text-center'>Fotos der mangler søgeord:</h1>}
        {predictions.unPredicted.map((p, key) => 
            <Form onSubmit={handleSubmit} key={key}>
                <Card className="m-1 flex-row p-2">
                    <Card.Header>
                        <Card.Img style={{ width: '18rem' }} src={p.urlLocal} alt={p.name}/>
                    </Card.Header>
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

        {(predictions.predicted.length>0)&&<h1 className='text-center'>Fotos med nye søgeord:</h1>}
        <div className="row justify-content-around mb-5">
        {predictions.predicted.map((p, key) => 
            <Card className="m-1" style={{ width: '18rem' }} key={key}>
                <Card.Img className="mt-2" src={p.urlLocal} alt={p.name} title={p.name}/>
                <Card.Body>
                    <Card.Text>
                        {p.name} <br/>
                        Søgeord: {p.predicts.map((s, i) => 
                            <span key={i}>{s} </span>
                        )}
                    </Card.Text>
                    {/* TODO: implement if time
                    <Button type="submit" variant="primary">Rediger søgeord</Button>
                    */}
                </Card.Body>
            </Card>
        )}
       </div>
       {(predictions.existing.length>0)&&<h4>Følgende Fotos ligger allerede i arkivet og kan ikke uploades, ønsker du alligevel at uploade så omdøb filerne til nyt navn og upload igen:</h4>}
        {predictions.existing.map((p, key) => 
            <p key={key}>{p}</p>
        )}

    </div> );
}
 
export default Train;