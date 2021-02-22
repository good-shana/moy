import React from 'react';
import { Props } from '../../interfaces';
import './tools.less';

export const Tools = (props: Props) => {
    return <div className="tools">
        {props.children}
    </div>
}