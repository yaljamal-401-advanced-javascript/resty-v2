import React from 'react';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/1337';
import Loader from 'react-loader-spinner';
import { If, Then } from '../if/if.js';
const Result = (props) => {
  //state ==> variable, 
  // props ==> object === just from the perant 
  return (
    <>

      <If condition={props.loader}>
        <Then>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </Then>
      </If>
      <h2>Results :</h2>
      <span>
        <JSONPretty data={props.data} theme={JSONPrettyMon}></JSONPretty>
      </span>
    </>
  );
};
export default Result;