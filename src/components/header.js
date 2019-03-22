import React from 'react';

const Header = function(props) {
   return (
      <div className="header">
         <div className="container">
            <h1 className="header__title">{props.title}</h1>
            <h3 className="header__subtitle">{props.subtitle}</h3>
         </div>   
      </div>
   );
}

export default Header;