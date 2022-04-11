import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import "./main.sass";
import NewNodeForm from "./NewNodeForm";
import {toggleCurrent} from "../../store/types/actionCreators";

const NodeList = () => {
    const dispatch = useDispatch();
    const nodes = useSelector(state => state.elements.nodes);

    const onElementClick = (id) => {
        const [params] = nodes.filter((element) => element.id === id);
        dispatch(toggleCurrent(params));
    }

    return (
        <div className="node-list">
            <h2 className="node-list-title">Nodes:</h2>
            <div className="node-list__container">
                <div className="node-list-items">

                    {nodes
                        .map((element, i) => {
                            return (
                                <div key={i + 1} className={`node-list-item active-${element.data?.isActive || 'false'}`}
                                     onClick={() => {
                                         onElementClick(element.id);
                                     }}>
                                    {element.data.label}
                                </div>
                            );
                        })}
                </div>
                <NewNodeForm els={nodes}/>
            </div>
        </div>
    );
};

export default NodeList;