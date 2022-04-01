import React from 'react';
import {
    fieldsInit,
    fieldsLabel,
    fieldsPhoto,
    fieldsVideo,
    fieldsContent,
    fieldsUnset, unsetDraggable, currUnset, graphRemoveLink, removeNode, removeEdgesTo, removeEdgesFrom, removeLinkOn
} from "../../store/actionCreators";

import './main.sass'
import {useDispatch, useSelector} from "react-redux";

const NodeEditor = ({node, onSubmit}) => {
    const dispatch = useDispatch();
    const {id, label, content, video, photo} = useSelector(state => state.editorFields.fields);
    
    if (node.id !== id) {
        dispatch(fieldsInit({
                label: node.data.label,
                content: node.data.content,
                id: node.id,
                photo: node.data.media.photo,
                video: node.data.media.video,
            }
        ));
    }

    const onClick = (label, content, photo, video, node) => {
        const params = {label, content, photo, video};
        onSubmit(params, node);
    }

    return (
        <div className='editor-wrapper'>
            <div className="node-editor">
                <div className="node-editor__content">
                    <div className="node-editor__item">
                        <label>Title:</label>
                        <input
                            className='input__label'
                            type='text'
                            value={label}
                            onChange={(event) => dispatch(fieldsLabel(event.target.value))}
                        />
                    </div>

                    <div className="node-editor__item">
                        <label>Content</label>
                        <textarea
                            className='input__content'
                            value={content}
                            onChange={(event) => dispatch(fieldsContent(event.target.value))}
                        />
                    </div>
                    <div className="node-editor__item photo">
                        <label>Photo</label>
                        <textarea
                            value={photo}
                            onChange={(event) => dispatch(fieldsPhoto(event.target.value))}
                        />
                    </div>
                    <div className="node-editor__item video">
                        <label>Video</label>
                        <textarea
                            value={video}
                            onChange={(event) => dispatch(fieldsVideo(event.target.value))}
                        />
                    </div>
                    <div className="editor_controls">
                        <button className="node-editor-submit editor_button"
                                onClick={() => {
                                    onClick(label, content, photo, video, node);
                                    dispatch(fieldsUnset());
                                }}>Submit
                        </button>
                        <button className="editor_button"
                            onClick={() => {
                                dispatch(currUnset());
                                dispatch(removeLinkOn(node.id));
                                dispatch(removeNode(node.id));
                                dispatch(graphRemoveLink(node.id));
                                dispatch(removeEdgesTo(node.id));
                                dispatch(removeEdgesFrom(node.id));
                            }}
                        >
                            Delete node
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NodeEditor;