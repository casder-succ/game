import React from 'react';
import ReactFlow, {ReactFlowProvider} from "react-flow-renderer";

import NodeEditor from '../NodeEditor/NodeEditor'
import {useDispatch, useSelector} from "react-redux";

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'

const Graph = () => {
    const dispatch = useDispatch();
    const elements = useSelector(state => state.elements.elements);
    const currElem = useSelector(state => state.currElement.currElem);
    const REG_FOR_NODES = /\[[[\sA-Za-z]+]]/gm;

    const onElementsRemove = (elementsToRemove) => {
        dispatch({type: "REMOVE_ELEMENTS", payload: elementsToRemove});
    }

    const onConnect = (params) => {
        dispatch({type: "ADD_ELEMENTS", payload: [{...params, id: 'e' + params.source + '-' + params.target}]});
        dispatch({type: "UPDATE_CONTENT", payload: {id: params.source, content: '\n[[]]'}});
    }

    const onPaneClick = () => {
        dispatch({type: "UNSET_CURR"});
    }

    const onElementClick = (event, element) => {
        if (!(element.id.startsWith("e"))) {
            dispatch({type: "SET_CURR", payload: element});
        }
    }

    const onElementEdit = (label, content, node) => {
        console.log(node)
        if (label !== currElem.data.label) {
            dispatch({type: "CHANGE_LABEL", payload: {id: currElem.id, label}});
        }

        if (content && content !== currElem.data.content) {
            dispatch({type: "CHANGE_CONTENT", payload: {id: currElem.id, content}});
            parseElementContent(
                currElem.id,
                content,
                node,
                currElem.position.x,
                currElem.position.y
            );
        }

        dispatch({type: "UNSET_CURR"});
        document.getElementsByClassName('react-flow__pane')[0].click();
    }

    const parseElementContent = (oldId, content, node, x, y) => {
        const x_y = [{x: 150, y: 120}, {x: 250, y: 80}, {x: 250, y: -120}, {x: 150, y: -180}]
        const names_arr = [...content.matchAll(REG_FOR_NODES)];


        if (names_arr.length && node.data.links.length < names_arr.length) {
            names_arr.forEach((el, i) => {
                
                const id = elements.length;
                const label = el[0].slice(2, -2);

                const params1 = {
                    id: `${id}`,
                    data: {
                        label,
                        content: ''
                    },
                    sourcePosition: 'right',
                    targetPosition: 'left',
                    position: {
                        x: x + x_y[node.data.links.length + i].x,
                        y: y + x_y[node.data.links.length + i].y
                    }
                };

                const params2 = {
                    id: `e${oldId}-${id}`,
                    source: `${oldId}`,
                    target: `${id}`
                };


                dispatch({type: "ADD_LINK", payload: {id: oldId, link: id}});
                dispatch({type: "ADD_ELEMENTS", payload: [params1, params2]});
            })
        }




    }


    return (
        <div className='graphField'>
                <ReactFlow
                    elements={elements}
                    onElementsRemove={onElementsRemove}
                    onConnect={onConnect}
                    deleteKeyCode={46}
                    nodesDraggable={false}
                    onElementClick={onElementClick}
                    onPaneClick={onPaneClick}
                >

                    {currElem && <NodeEditor
                        node={currElem}
                        onSubmit={onElementEdit}
                    />}
                </ReactFlow>
        </div>
    );

};

export default Graph;