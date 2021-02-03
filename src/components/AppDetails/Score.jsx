import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function Score(props) {
    const dispatch = useDispatch();
    const {qANDa} = props;
    const detailsData = useSelector(state => state.detailsData);
    const [score, setScore] = useState(0);

    return (
        <>
        <InputGroup size="sm">
            <InputGroup.Prepend>
                <InputGroup.Text style={{backgroundColor:'#303030', color: 'white'}}id="inputGroup-sizing-lg">Score (1-10)</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" 
                aria-describedby="inputGroup-sizing-sm" 
                placeholder={qANDa.review_score}
                style={{textAlign:'right'}}
                onChange={event=>{setScore(event.target.value)}}
            />
            <InputGroup.Append>
                <Button type="submit" style={{backgroundColor:'#97CAEB', color:'#303030'}}
                    onClick={()=>{dispatch({type:'UPDATE_SCORE', 
                    payload: {score: score, q_id: qANDa.id, app_id:detailsData.id}})}}
                >
                    Submit
                </Button>
            </InputGroup.Append>
        </InputGroup>
        </>
    )
}