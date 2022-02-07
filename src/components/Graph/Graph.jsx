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

    const onElementEdit = (label, title, content) => {
        if (label !== currElem.data.label) {
            dispatch({type: "CHANGE_LABEL", payload: {id: currElem.id, label}});
        }

        if (content && content !== currElem.data.content) {
            dispatch({type: "CHANGE_CONTENT", payload: {id: currElem.id, content}});
            parseElementContent(
                currElem.id,
                content,
                currElem.position.x,
                currElem.position.y
            );
        }

        dispatch({type: "UNSET_CURR"});
        document.getElementsByClassName('react-flow__pane')[0].click();
    }

    const parseElementContent = (oldId, content, x, y) => {
        const a = content.indexOf('[[');
        const b = content.indexOf(']]', a);
        const label = content.slice(a + 2, b);

        const id = elements.length;

        const params1 = {
            id: `${id}`,
            data: {
                label,
                content: ''
            },
            sourcePosition: 'right',
            targetPosition: 'left',
            position: {
                x: x + 250,
                y: y + 120
            }
        };

        const params2 = {
            id: `e${oldId}-${id}`,
            source: `${oldId}`,
            target: `${id}`
        };

        if (a !== 1) {
            dispatch({type: "ADD_ELEMENTS", payload: [params1, params2]});
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