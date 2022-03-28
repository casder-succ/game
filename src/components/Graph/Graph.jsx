import React from 'react';
import ReactFlow from "react-flow-renderer";

import NodeEditor from '../NodeEditor/NodeEditor'
import {useDispatch, useSelector} from "react-redux";
import {onConnect, onElementClick, onElementEdit, onElementsRemove, onPaneClick} from "../../utils/graphOnEvent";

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'
import CustomTextNode from "../Node/CustomTextNode";

const Graph = () => {
    const dispatch = useDispatch();
    const elements = useSelector(state => ([...state.nodes.nodes, ...state.edges.edges]));
    const currElem = useSelector(state => state.currElement.currElem);
    const isDraggable = useSelector(state => state.controls.isDraggable);
    const nodeTypes = {
        textNode: CustomTextNode,
    }

    return (
        <div className='graphField'>
            <ReactFlow
                elements={elements}
                nodeTypes={nodeTypes}
                onElementsRemove={(elements) => onElementsRemove(elements, dispatch)}
                onConnect={(edge) => onConnect(edge, dispatch)}
                deleteKeyCode={46}

                nodesDraggable={isDraggable}
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