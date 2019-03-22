import React from 'react';


export default class AddOption extends React.Component {
   state = {
      error: undefined
   };

   handleAddOptions = (e) => {
      e.preventDefault();
      
      const data = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(data);

      this.setState(function() {
         return {
            error: error
         }
      });

      e.target.elements.option.value = '';
   };
   
   render() {
      return (
         <div className="add-option">
            {this.state.error && <p>{this.state.error}</p> }
            <form onSubmit={this.handleAddOptions}>
               <input type="text" name="option" id="add-option-text"/>
               <button className="buttons add-option-button">Add Option</button>
            </form>
         </div>
      );
   }
}