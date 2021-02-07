import React, {useState} from 'react';
import MakeScale from './MakeScale.jsx';


export default function TenPointScale() {
    const numberLine = [...Array(11).keys()];
    const [selectedNumbers, setSelectedNumbers] = useState(0);

    return (
        <>
        {numberLine.map((number) => (<MakeScale key={number} selected={selectedNumbers >= number} number={number} onSelect={()=>setSelectedNumbers(number)}/>))  }
        
        </>
    )

}