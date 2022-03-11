import React from 'react';

import './main.sass'
import {useDispatch, useSelector} from "react-redux";

const NodeEditor = ({node, onSubmit}) => {
    const dispatch = useDispatch();
    const {id, label, content, video, photo} = useSelector(state => state.editorFields.fields);
    
    if ((label === "" && node.id !== id) || (content === "" && node.id !== id) || node.id !== id) {
        dispatch({
            type: "INIT",
            payload: {
                label: node.data.label,
                content: node.data.content,
                id: node.id,
                photo: node.data.media.photo,
                video: node.data.media.video
            }
        });
    }

    return (
        <div className='editor-wrapper'>
            <div className="node-editor">
                <div className="node-editor__content">
                    <div className="node-editor__item">
                        Id: {id}
                    </div>

                    <div className="node-editor__item">
                        <label>Title:</label>
                        <input
                            className='input__label'
                            type='text'
                            value={label}
                            onChange={(event) => dispatch({
                                type: "CHANGE",
                                payload: {label: event.target.value, content, id, photo, video}
                            })}
                        />
                    </div>

                    <div className="node-editor__item">
                        <label>Content</label>
                        <textarea
                            className='input__content'
                            value={content}
                            onChange={(event) => dispatch({
                                type: "CHANGE",
                                payload: {content: event.target.value, label, id, photo, video}
                            })}
                        />
                    </div>
                    <div className="node-editor__item">
                        <label>Photo</label>
                        <textarea
                            className='input__content'
                            value={photo}
                            onChange={(event) => dispatch({
                                type: "CHANGE",
                                payload: {content, label, id, photo: event.target.value, video}
                            })}
                        />
                    </div>
                    <div className="node-editor__item">
                        <label>Video</label>
                        <textarea
                            className='input__content'
                            value={video}
                            onChange={(event) => dispatch({
                                type: "CHANGE",
                                payload: {content, label, id, photo, video: event.target.value}
                            })}
                        />
                    </div>
                    <button className="node-editor-submit" onClick={() => onSubmit(label, content, node, photo, video)}>Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NodeEditor;