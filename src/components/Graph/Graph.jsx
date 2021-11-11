import React, {useState, useEffect} from 'react';
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";


import initialElements from './graphElements';
import NodeEditor from '../NodeEditor/NodeEditor'
import {addNode} from '../../utils/index'

import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
import './main.sass'



const Graph = () => {
  const [elements, setElements] = useState(initialElements);
  const [currElement, setCurrElement] = useState(null);

  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  // useEffect(() => {
  //   setElements((els) =>
  //     els.map((el) => {
  //       return el;
  //     })
  //   );
  // }, [elements, setElements]);
  const parseElementContent = (id, content, x, y) => {
    const a = content.indexOf('[[');
    const b = content.indexOf(']]', a);

    const label = content.slice(a + 2, b);

    const params1 = {
      id: `e${id + 1}`,
      data: {
        label,
        content: ''
      },
      sourcePosition: 'right',
      targetPosition: 'left',
      position: {
        x: x + 150,
        y: y + 90
      }
    };

    const params2 = {
      id: `${id}-e${id + 1}`,
      source: `${id}`,
      target: `e${id + 1}`
    };

    if (a >= 0) {
      setElements((els) => addNode(params1, els));
      setElements((els) => addEdge(params2, els));
    }
  }

  const onElementClick = (event, element) => {
    event.preventDefault();
    if (currElement) {
      parseElementContent(currElement.id, currElement.data.content, currElement.position.x, currElement.position.y);
    }
    setCurrElement(element);
    console.log(elements);
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