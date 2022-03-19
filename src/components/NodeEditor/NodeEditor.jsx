import React from 'react';
import {
    fieldsInit,
    fieldsLabel,
    fieldsPhoto,
    fieldsVideo,
    fieldsContent,
    fieldsUnset, unsetDraggable
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
                        Id: {id}
                    </div>

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
                    <div className="node-editor__item">
                        <label>Photo</label>
                        <textarea
                            className='input__content'
                            value={photo}
                            onChange={(event) => dispatch(fieldsPhoto(event.target.value))}
                        />
                    </div>
                    <div className="node-editor__item">
                        <label>Video</label>
                        <textarea
                            className='input__content'
                            value={video}
                            onChange={(event) => dispatch(fieldsVideo(event.target.value))}
                        />
                    </div>
                    <button className="node-editor-submit"
                            onClick={() => {
                                dispatch(unsetDraggable());
                                onClick(label, content, photo, video, node);
                                dispatch(fieldsUnset());
                            }}>Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NodeEditor;