import React from 'react';
import ReactFlow from "react-flow-renderer";

import NodeEditor from '../NodeEditor/NodeEditor'
import {useDispatch, useSelector} from "react-redux";
import {onConnect, onElementClick, onElementEdit, onPaneClick} from "../../utils/graphOnEvent";

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'
import CustomTextNode from "../Node/CustomTextNode";

const Graph = () => {
    const dispatch = useDispatch();
    const elements = useSelector(state => ([...state.elements.nodes, ...state.elements.edges]));
    const currentElement = useSelector(state => state.elements.currentElement);
    const nodeTypes = {
        textNode: CustomTextNode,
    }

    return (
        <div className='graphField'>
            <ReactFlow
                elements={elements}
                nodeTypes={nodeTypes}
                onConnect={(edge) => onConnect(edge, dispatch)}
                deleteKeyCode={46}

                onElementClick={(event, element) => onElementClick(event, element, dispatch)}
                onPaneClick={() => onPaneClick(dispatch)}
            >

                {currentElement && <NodeEditor
                    node={currentElement}
                    onSubmit={(params, node) => onElementEdit(params, node, currentElement, dispatch)}
                />}
            </ReactFlow>
        </div>
    );

};

export default Graph;