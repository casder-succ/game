import React, { useState, useEffect } from 'react';

import './main.sass'

const NodeEditor = ({node}) => {
  const [element, setElement] = useState(node);
  const [elementName, setELementName] = useState(element.data.label);
  const [elementContent, setElementContent] = useState(element.data.content);

  useEffect(() => {
    setElement(node);
    setELementName(element.data.label);
    setElementContent(element.data.content);
  })

  const changeName = (event) => {
    const temp = element;
    temp.data.label = event.target.value;

    setElement(temp);
    setELementName(event.target.value)
  }

  const changeContent = (event) => {
    const temp = element;
    temp.data.content = event.target.value;

    setElement(temp);
    setElementContent(event.target.value);
  }

  return (
    <div className='node-editor'>
      <div className="node-editor__content">
        <div className="node-editor__item">
          <label>Label:</label>
            <input
              className='input__label'
              type='text'
              value={elementName}
              onChange={(event) => changeName(event)}
            />

        </div>

        <div className="node-editor__item">
          <label>Content</label>
          <input
            className='input__content'
            type='text'
            value={elementContent}
            onChange={(event) => changeContent(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default NodeEditor;