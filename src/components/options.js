import React from 'react';
import Option from './option';

const Options = function(props) {
   return (
      <div>
         <div className="widget-header">
            <h3 className="header-text">Your Options</h3>
            <button onClick={props.handleRemoveAll} className="buttons buttons--remove">Remove All</button>
         </div>

         {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
         {
            props.options.map(function(data) {
               return <Option key={data} option={data} handleDeleteOne={props.handleDeleteOne} />
            })
         } 
      </div>
   );
}

export default Options;