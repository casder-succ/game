import React from 'react';

import './main.sass'
import {useDispatch, useSelector} from "react-redux";

const NodeEditor = ({node, onSubmit}) => {
    const dispatch = useDispatch();
    const {id, label, content} = useSelector(state => state.editorFields.fields);

    if (label === "" || (content === "" && node.data.content !== "") || node.id !== id) {
        console.log( (content === "" && node.data.content !== "") )
        console.log( (label === "") )
        console.log( (node.id !== id) )
        dispatch({type: "INIT", payload: {label: node.data.label, content: node.data.content, id: node.id}});
    }



    console.log(node, label, content)

    return (
        <div className='node-editor'>
            <div className="node-editor__content">
                <div className="node-editor__item">
                    Id: {id}
                </div>
                <div className="node-editor__item">
                    <label>Label:</label>
                    <input
                        className='input__label'
                        type='text'
                        value={label}
                        onChange={(event) => dispatch({type: "CHANGE", payload: {label: event.target.value, content, id}})}
                    />

                </div>

                <div className="node-editor__item">
                    <label>Content</label>
                    <textarea
                        className='input__content'
                        value={content}
                        onChange={(event) => dispatch({type: "CHANGE", payload: {content: event.target.value, label, id}})}
                    />
                </div>
                <button className="node-editor-submit" onClick={() => onSubmit(label, content)}>Submit</button>
            </div>
        </div>
    );
};

export default NodeEditor;