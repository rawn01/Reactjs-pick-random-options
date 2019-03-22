import React from 'react';
import AddOption from './add-option';
import Options from './options';
import CallToAction from './call-to-action';
import Header from './header';
import OptionModal from './option-modal';


export default class MyApp extends React.Component {
   state = {
      myOptions: [],
      selectedOption: undefined
   };

   handleCloseModal = (e) => {
      this.setState(() => {
         return {
            selectedOption: undefined
         }
      });
   }

   handleRemoveAll = () => {
      this.setState(function() {
         return {
            myOptions: []
         }
      });
   };

   handleDeleteOne = (option) => {
      this.setState(function(prevState) {
         return {
            myOptions: prevState.myOptions.filter(function(data) {
               return option !== data
            })
         };
      });
   };

   handleCallToAction = () => {
      const random = Math.floor(Math.random() * this.state.myOptions.length);
      const optionChosen = this.state.myOptions[random];

      this.setState(() => {
         return {
            selectedOption: optionChosen
         }
      });
   };

   handleAddOption = (option) => {
      if(!option) {
         return "Enter a valid value to add item."
      } else if(this.state.myOptions.indexOf(option) > -1) {
         return "This option already exist!";
      }

      this.setState(function(prevState) {
         return {
            myOptions: [...prevState.myOptions, option]
         };
      });
   };

   componentDidMount() {
      console.log('componentDidMount');
   }

   componentDidUpdate(prevProps, prevState) {
      if(prevState.myOptions.length !== this.state.myOptions.length) {
         console.log('componentDidUpdate'); 
      } 
      const json = JSON.stringify(this.state.myOptions);
      localStorage.setItem('option', json);
   }

   componentWillUnmount() {
      console.log('componentWillUnmount');
      
   }

   render() {
      const mytitle = "My first React App";
      const mySubtitle = "React components";

      return (
         <div>
            <Header title={mytitle} subtitle={mySubtitle}/>
               <div className="container">
                     <CallToAction hasOptions={this.state.myOptions.length > 0} handleCallToAction={this.handleCallToAction}/>
                     <div className="widget">
                        <Options options={this.state.myOptions} handleRemoveAll={this.handleRemoveAll} handleDeleteOne={this.handleDeleteOne}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                     </div>
                  </div>   
            <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal}/>
         </div>
      );
   }
}

MyApp.defaultProps = {
   options: []
}
