import React from 'react';
import ReactFlow from "react-flow-renderer";

import NodeEditor from '../NodeEditor/NodeEditor'
import {useDispatch, useSelector} from "react-redux";

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'
import {onConnect, onElementClick, onElementsRemove, onPaneClick} from "../../utils/graphOnEvent";

const Graph = () => {
    const dispatch = useDispatch();
    const elements = useSelector(state => state.elements.elements);
    const currElem = useSelector(state => state.currElement.currElem);



    return (
        <div className='graphField'>
            <ReactFlow
                elements={elements}
                onElementsRemove={(elements) => onElementsRemove(elements, dispatch)}
                onConnect={(params) => onConnect(params, dispatch)}
                deleteKeyCode={46}
                nodesDraggable={false}
                onElementClick={(event, element) => onElementClick(event, element, dispatch)}
                onPaneClick={() => onPaneClick(dispatch)}
            >

                {currElem && <NodeEditor
                    node={currElem}
                    onSubmit={(params, node) => onElementEdit(params, node, currElem, dispatch)}
                />}
            </ReactFlow>
        </div>
    );

};

export default Graph;