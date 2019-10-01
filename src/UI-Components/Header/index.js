import React from "react";
const Header = props => {
  let { propsData } = props;
  return (
    <div>
      <label>{propsData.label}</label>
    </div>
  );
};
export default Header;
