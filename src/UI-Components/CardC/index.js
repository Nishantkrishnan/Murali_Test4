import React, { Component } from "react";
import { Card } from "@material-ui/core";

class CardC extends Component {
  render() {
    const { propsData } = this.props;
    let color = propsData.color;
    const children = React.Children.map(this.props.children, child => {
      return <div>{child}</div>;
    });
    return (
      <div className="card">
        <div className="cardsinner">
          <Card style={{ color: color }}>
<label>{propsData.label}</label>
          {children}</Card>
        </div>
      </div>
    );
  }
}

export default CardC;
