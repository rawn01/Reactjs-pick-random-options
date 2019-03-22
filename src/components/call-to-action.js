import React from 'react';


const CallToAction = function(props) {
   return (
      <div>
         <button onClick={props.handleCallToAction} disabled={!props.hasOptions} className="big-button">What do you want to do?</button>
      </div>
   );
}


export default CallToAction;