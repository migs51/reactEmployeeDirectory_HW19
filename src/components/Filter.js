import React from 'react';




function filter ({isMale}) {
    return (
        <div><h4>Filter By: </h4>
            <button onClick={isMale} className="ui primary basic button">Gender: Male</button>
            <button className="ui primary basic button">Gender: Female</button>
        </div>
    );
}

export default filter;