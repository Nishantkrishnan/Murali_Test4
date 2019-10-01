import React from 'react';
import Flexi from '../../UI-Components/Flexi';
 import hoc from '../../UI-hocs/ScreenHoc';

class Screen_Interfaces extends React.Component{

  render(){
    const {config,handleFieldChange,handleOnSubmit} =this.props;
    console.log(config,"config coming");
    return(
      <Flexi config={config}
              handleOnSubmit={handleOnSubmit}
              handleFieldChange={handleFieldChange}/>
    );
  }
}export default hoc()(Screen_Interfaces);
