import React from "react";
const Flexi = props => {
  let { config, handleFieldChange, handleOnSubmit } = props;
  let items=config.items;
console.log(config,"flexiiii");
  const FlexiConfig = item => {
    let isChild = "children" in item;
    if (isChild) {
      return item.children.items.map((Data, Index) => {
        return <div> {FlexiConfig(Data)}</div>;
      });
    } else {
      const Components = require(`../${item.type}`).default;
      return (
        <Components
          propsData={item.props}
          handleFieldChange={handleFieldChange}
          handleOnSubmit={handleOnSubmit}
        />
      );
    }
  };
  return <div>{items.map((item, index) => FlexiConfig(item))}</div>;
};

export default Flexi;
