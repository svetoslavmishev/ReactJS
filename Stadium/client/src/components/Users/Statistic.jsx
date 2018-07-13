import React from 'react';

const Statistic = (props) => {
  return (
    <div>
      <div className="row">
        <div className="information-box">
          <div className="information-middle">
            <span><strong>Count of users: </strong></span>
            <span>{props.count}</span>
          </div>
          <div className="information-middle">
            <span><strong>Count of stadiums: </strong></span>
            <span>{props.stadiums}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistic;