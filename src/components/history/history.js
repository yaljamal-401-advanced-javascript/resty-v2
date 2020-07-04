import React from 'react';

const History = (props) => {
  const data = JSON.parse(localStorage.getItem('history'));
  const results = data.map((obj, i) => (
    <p key={i}>
      <span className="span">{obj.method}</span>
      {obj.url}
    </p>
  ));
  return <div>{results}</div>;
};
export default History;

