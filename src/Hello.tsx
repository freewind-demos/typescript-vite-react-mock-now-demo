import React, {FC} from 'react';
import './Hello.pcss';
import {DatePicker} from "antd";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <h1>Hello Fake Now</h1>
        <div>Now: {new Date().toString()}</div>
        <DatePicker/>
    </div>;
}
