import React, {useState, useEffect} from 'react';

import './main.sass'

const NodeEditor = ({node, onSubmit}) => {
    const [elementName, setElementName] = useState(node.data.label);
    const [elementContent, setElementContent] = useState(node.data.content);

    useEffect(() => {
        setElementName(node.data.label);
        setElementContent(node.data.content);
    }, [node.data.label, node.data.content])

    return (
        <div className='node-editor'>
            <div className="node-editor__content">
                <div className="node-editor__item">
                    <label>Label:</label>
                    <input
                        className='input__label'
                        type='text'
                        value={elementName}
                        onChange={(event) => setElementName(event.target.value)}
                    />

                </div>

                <div className="node-editor__item">
                    <label>Content</label>
                    <textarea
                        className='input__content'
                        value={elementContent}
                        onChange={(event) => setElementContent(event.target.value)}
                    />
                </div>
                <button className="node-editor-submit" onClick={() => onSubmit(elementName, elementContent)}>Submit</button>
            </div>
        </div>
    );
};

export default NodeEditor;