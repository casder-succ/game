import React, {useState} from 'react';
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";

import initialElements from './graphElements';
import NodeEditor from '../NodeEditor/NodeEditor'

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'

const Graph = () => {
  const [elements, setElements] = useState(initialElements);
  const [currElement, setCurrElement] = useState(null);

  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));



  const onElementClick = (event, element) => {
    event.preventDefault();
    setCurrElement(element);
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
        onPaneClick={(evt) => onElementClick(evt, null)}
      >


        {currElement && <NodeEditor node={currElement}/>}
      </ReactFlow>
    </div>
  );
};

export default Graph;