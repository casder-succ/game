import React, {useState, useEffect} from 'react';
import ReactFlow, {removeElements, addEdge} from "react-flow-renderer";

import initialElements from '../../store/graphElements';
import NodeEditor from '../NodeEditor/NodeEditor'
import {addNode} from '../../utils/index'

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'
import {useDispatch, useSelector} from "react-redux";


const Graph = () => {
    const [elents, setElments] = useState(initialElements);
    // const [currElement, setCurrElement] = useState(null);
    // const [elId, setElId] = useState(null);
    // const [nodeName, setNodeName] = useState(null);
    // const [nodeContent, setNodeContent] = useState(null);

    const dispatch = useDispatch();
    const elements = useSelector(state => state.elements);

    console.log(elements);

    const onElementsRemove = (elementsToRemove) => setElments((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => dispatch({type: "ADD_EDGE", payload: {...params, id: 'e' + params.source + '-' + params.target}});



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
    // useEffect(() => {
    //     setElements((els) =>
    //         els.map((el) => {
    //             if (el.id === elId) {
    //                 el.data = {
    //                     ...el.data,
    //                     label: nodeName,
    //                 };
    //             }
    //
    //             return el;
    //         })
    //     );
    // }, [elId, nodeName, setElements]);
    //
    // useEffect(() => {
    //     setElements((els) =>
    //         els.map((el) => {
    //             if (el.id === elId) {
    //                 el.data = {
    //                     ...el.data,
    //                     content: nodeContent,
    //                 };
    //             }
    //
    //             return el;
    //         })
    //     );
    //
    //
    // }, [elId, nodeContent, setElements]);
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
    const onElementClick = (event, element) => {
        console.log(element);
    }
    //
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
                {/*{currElement && <NodeEditor node={currElement} onSubmit={onElementEdit}/>}*/}
            </ReactFlow>
        </div>
    );

};

export default Graph;