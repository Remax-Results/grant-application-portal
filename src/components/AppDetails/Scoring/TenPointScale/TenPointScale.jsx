import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MakeScale from './MakeScale.jsx';


export default function TenPointScale() {
    const dispatch=useDispatch();
    const numberLine = [...Array(11).keys()];
    const [selectedNumbers, setSelectedNumbers] = useState(0);
    const qANDa = useSelector(state=>state.qANDa);
    const detailsData = useSelector(state=>state.detailsData);
    return (
        <>
        {numberLine.map((number) => (<MakeScale key={number} selected={selectedNumbers >= number} number={number} onSelect={()=>{setSelectedNumbers(number); {dispatch({type:'UPDATE_SCORE', 
                    payload: {score: selectedNumbers, q_id: qANDa.id, app_id:detailsData.id}})}}}/>))  }
        
        </>
    )

}