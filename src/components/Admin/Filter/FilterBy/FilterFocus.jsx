import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dropdown} from 'react-bootstrap';

export default function FilterFocus({f}) {
    const dispatch=useDispatch();
    const focusArea=useSelector(state=>state.focusArea);
    return (
        <Dropdown.Item onSelect={()=>
            {
                dispatch({type:'FILTER_FOCUS', payload: {id: f.id, focus: f.focus}});
            }}>
                {f.focus}
        </Dropdown.Item>
    )
}