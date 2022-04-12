import React from 'react';
import ReactFlow from "react-flow-renderer";

import NodeEditor from '../NodeEditor/NodeEditor'
import {useDispatch, connect} from "react-redux";
import {onConnect, onElementClick, onElementEdit, onPaneClick} from "../../utils/graphOnEvent";

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'
import CustomTextNode from "../Node/CustomTextNode";

const Graph = (props) => {
    const dispatch = useDispatch();
    const nodeTypes = {
        textNode: CustomTextNode,
    }

    return (
        <div className='graphField'>
            <ReactFlow
                elements={props.elements}
                nodeTypes={nodeTypes}
                onConnect={(edge) => onConnect(edge, dispatch)}
                deleteKeyCode={46}

                onElementClick={(event, element) => onElementClick(event, element, dispatch)}
                onPaneClick={() => onPaneClick(dispatch)}
            >

                {props.currentElement && <NodeEditor
                    node={props.currentElement}
                    onSubmit={(params, node) => onElementEdit(params, node, props.currentElement, dispatch)}
                />}
            </ReactFlow>
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        elements: [...state.elements.nodes, ...state.elements.edges],
        currentElement: state.elements.currentElement,
    }
}

export default connect(mapStateToProps)(Graph);