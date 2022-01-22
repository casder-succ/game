import React, {useState, useEffect} from 'react';

import './main.sass'

const NodeEditor = ({node, onNameChange}) => {
    const [element, setElement] = useState(node);
    const [elementName, setElementName] = useState(element.data.label);
    const [elementContent, setElementContent] = useState(element.data.content);

    useEffect(() => {
        setElement(node);
        setElementName(element.data.label);
        setElementContent(element.data.content);
    }, [node, element.data.label, element.data.content])

    const changeName = (event) => {
        const temp = element;
        temp.data.label = event.target.value;

        setElement(temp);
        setElementName(event.target.value)
    }

    const changeContent = (event) => {
        const temp = element;
        temp.data.content = event.target.value;

        setElement(temp);
        setElementContent(event.target.value);
    }

    const handleSubmit = () => {
        console.log('lalala');
    }

    return (
        <div className='node-editor'>
            <form onSubmit={handleSubmit} className="node-editor__content">
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
                    <textarea
                        className='input__content'
                        value={elementContent}
                        onChange={(event) => changeContent(event)}
                    />
                </div>
                <input
                    className="node-editor-submit"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default NodeEditor;