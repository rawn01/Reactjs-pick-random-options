import React from 'react';


const Option = function(props) {
   return (
      <div className="option option--message">
         <div className="option-text">{props.option}</div>
         <button onClick={function(e) { props.handleDeleteOne(props.option);}} className="buttons buttons--remove">Remove</button>
      </div>
   );
}

export default Option;