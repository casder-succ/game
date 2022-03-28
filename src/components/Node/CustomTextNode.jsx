import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';
import "./main.sass"

export default memo(({ data }) => {
    return (
        <div className="custom-node">
            <Handle
                type="target"
                position="left"
            />
            <div className="custom-node__title">
                {data.label}
            </div>
            <div className="custom-node__content">
                {data.content.length > 60 ? data.content.substring(0, 60) + '...' : data.content}
            </div>
            <Handle
                type="source"
                position="right"
            />

        </div>
    );
});
