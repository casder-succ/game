import React from 'react';
import {useDispatch} from "react-redux";
import {NodeFlow} from '../../utils/nodes';

import './main.sass';
import {newNode} from "../../store/actionCreators";

const NewNodeForm = ({els}) => {
    const dispatch = useDispatch();

    const onClick = () => {
        const position = els.reduce((prev, curr) => {
            if (curr.position.x > prev.x) prev.x = curr.position.x;
            if (curr.position.y > prev.y) prev.y = curr.position.y;

            return prev;
        }, {x: 0, y: 0})
        position.x += 150;
        position.y += 80;
        const node = new NodeFlow(position.x, position.y);

        dispatch(newNode(node));
    }

    return (
        <div className="create-form">
            <button onClick={onClick}>Add New</button>
        </div>
    );
};

export default NewNodeForm;