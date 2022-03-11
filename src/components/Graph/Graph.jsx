import React from 'react';
import ReactFlow from "react-flow-renderer";

import NodeEditor from '../NodeEditor/NodeEditor'
import {useDispatch, useSelector} from "react-redux";

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'
import {parseElementContent} from "../../utils/parsing";

const Graph = () => {
    const dispatch = useDispatch();
    const elements = useSelector(state => state.elements.elements);
    const currElem = useSelector(state => state.currElement.currElem);

    const onElementsRemove = (elementsToRemove) => {
        dispatch({type: "REMOVE_ELEMENTS", payload: elementsToRemove});
    }

    const onConnect = (params) => {
        dispatch({type: "ADD_ELEMENTS", payload: [{...params, id: 'e' + params.source + '-' + params.target}]});
        dispatch({type: "UPDATE_CONTENT", payload: {id: params.source, content: params.target}});
    }

    const onPaneClick = () => {
        dispatch({type: "UNSET_CURR"});
    }

    const onElementClick = (event, element) => {
        if (!(element.id.startsWith("e"))) {
            dispatch({type: "SET_CURR", payload: element});
        }
    }

    const onElementEdit = (label, content, node, photo, video) => {
        if (photo !== currElem.data.media.photo || video !== currElem.data.media.video) {
            dispatch({type: "CHANGE_MEDIA", payload: {id: currElem.id, photo, video}});
        }

        if (label !== currElem.data.label) {
            dispatch({type: "CHANGE_LABEL", payload: {id: currElem.id, label}});
        }

        if (content && content !== currElem.data.content) {
            dispatch({type: "CHANGE_CONTENT", payload: {id: currElem.id, content}});

            parseElementContent(currElem.id, content, node, currElem.position.x, currElem.position.y)
                .forEach(el => dispatch(el));
        }

        dispatch({type: "UNSET_CURR"});
        document.getElementsByClassName('react-flow__pane')[0].click();
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