import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';



export default function Answer(props) {
    const {qANDa} = props;


    return (
        <>{qANDa.answer_text}</>
    )
}