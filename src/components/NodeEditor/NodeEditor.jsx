import React, {useState, useEffect} from 'react';

import './main.sass'
import {useDispatch, useSelector} from "react-redux";

const NodeEditor = ({node, onSubmit}) => {
    const dispatch = useDispatch();
    const {label, content} = useSelector(state => state.editorFields.fields);

    dispatch({type: "INIT", payload: {label: node.data.label, content: node.data.content}});


    return (
        <div className='node-editor'>
            <div className="node-editor__content">
                <div className="node-editor__item">
                    <label>Label:</label>
                    <input
                        className='input__label'
                        type='text'
                        value={label}
                        onChange={(event) => dispatch({type: "CHANGE_LABEL", label: event.target.value})}
                    />

                </div>

                <div className="node-editor__item">
                    <label>Content</label>
                    <textarea
                        className='input__content'
                        value={content}
                        onChange={(event) => dispatch({type: "CHANGE_LABEL", content: event.target.value})}
                    />
                </div>
                <button className="node-editor-submit" onClick={() => onSubmit(label, content)}>Submit</button>
            </div>
        </div>
    );
};

export default NodeEditor;