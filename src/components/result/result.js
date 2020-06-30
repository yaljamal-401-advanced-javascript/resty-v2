import React from 'react';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/1337';

const Result =(props)=>{
return (
    <>
    <h2>Results :</h2>
    <span>
        <JSONPretty data={props.data} theme={JSONPrettyMon}></JSONPretty>
    </span>
    </>
)
};
export default Result;