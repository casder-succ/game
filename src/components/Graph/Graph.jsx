import React from 'react';
import ReactFlow from "react-flow-renderer";

import NodeEditor from '../NodeEditor/NodeEditor'

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'
import {useDispatch, useSelector} from "react-redux";


const Graph = () => {
    const dispatch = useDispatch();
    const elements = useSelector(state => state.elements.elements);
    const currElem = useSelector(state => state.currElement.currElem);


    const onElementsRemove = (elementsToRemove) => {
        dispatch({type: "REMOVE_ELEMENTS", payload: elementsToRemove});
    }

    const onConnect = (params) => {
        dispatch({type: "ADD_EDGE", payload: {...params, id: 'e' + params.source + '-' + params.target}});
    }

    //
    // const onElementEdit = (name, content) => {
    //     setElId(currElement.id);
    //     setNodeName(name);
    //     setNodeContent(content);
    //     if (content) parseElementContent(
    //         currElement.id,
    //         content,
    //         currElement.position.x,
    //         currElement.position.y
    //     );
    //     setCurrElement(null);
    // }
    //
    //
    //
    // const parseElementContent = (id, content, x, y) => {
    //     const a = content.indexOf('[[');
    //     const b = content.indexOf(']]', a);
    //
    //     const label = content.slice(a + 2, b);
    //
    //     const params1 = {
    //         id: `e${id + 1}`,
    //         data: {
    //             label,
    //             content: ''
    //         },
    //         sourcePosition: 'right',
    //         targetPosition: 'left',
    //         position: {
    //             x: x + 250,
    //             y: y + 120
    //         }
    //     };
    //
    //     const params2 = {
    //         id: `${id}-e${id + 1}`,
    //         source: `${id}`,
    //         target: `e${id + 1}`
    //     };
    //
    //     if (a >= 0) {
    //         setElements((els) => addNode(params1, els));
    //         setElements((els) => addEdge(params2, els));
    //     }
    // }
    //

    const onElementClick = (event, element) => dispatch({type: "SET_CURR", payload: element});
    return (
        <div className='graphField'>
            <ReactFlow
                elements={elements}
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                deleteKeyCode={46}
                nodesDraggable={false}
                onElementClick={onElementClick}
            >
                {currElem && <NodeEditor
                    node={currElem}
                    // onSubmit={onElementEdit}
                />}
            </ReactFlow>
        </div>
    );

};

export default Graph;