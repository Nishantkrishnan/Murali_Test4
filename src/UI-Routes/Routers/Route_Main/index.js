import React from "react";
import Screen_Interfaces from "../../../UI-Pages/Screen_Interfaces";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Route_Main extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            exact
            path={"/screen-interface/:path"}
            component={Screen_Interfaces}
          />
        </Router>
      </div>
    );
  }
}
export default Route_Main;
