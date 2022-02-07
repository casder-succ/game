import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import "./main.sass";

const NodeList = () => {
    const dispatch = useDispatch();
    const elements = useSelector(state => state.elements.elements);

    const onElementClick = (id) => {
        const [params] = elements.filter((element) => element.id === id);
        dispatch({type: "SET_CURR", payload: params});

        const [element] = Array.from(document.getElementsByClassName('react-flow__node')).filter((el) => el.getAttribute("data-id") === id );
        element.click();
    }

    return (
        <div className="node-list">
            <h2 className="node-list-title">Nodes:</h2>
            <div className="node-list-items">
                {elements
                    .filter((element) => !element.id.startsWith('e'))
                    .map((element, i) => {
                        return (
                            <div key={i + 1} className="node-list-item" onClick={() => onElementClick(element.id)}>
                                {element.data.label}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default NodeList;