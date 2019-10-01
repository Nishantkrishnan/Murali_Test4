import React from "react";
const hoc = () => Component => {
  class ScreenHoc extends React.Component {
    state = {
      list: {},
      getUrl:false
    };

    handleOnSubmit = e => {
      //  e.preventDefault();
      let { list } = this.state;
      console.log(this.state.list);
    };
    handleFieldChange = event => {
      let { list } = this.state;
      const { name, value } = event.target;
      console.log(name, value);
      this.setState({
        list: {
          ...list,
          [name]: value
        }
      });
    };

   componentDidMount(){
     const {getUrl}= this.state;
        const {match}=this.props;
         const {params}= match;
      let  path1=this.props.match.params.path;
          let config = require(`../../UI-Config/Screen/Specs/${params.path}`).default;
          console.log(config,"path");
          this.setState({
            config,
            getUrl:true
          })
   };

    render() {
      const { list } = this.state;
      const { handleOnSubmit, handleFieldChange } = this;
console.log(this.state.config,"cconfig");
      return (
        <div>
        {this.state.getUrl?
        <Component
          handleOnSubmit={handleOnSubmit}
          config={this.state.config}
          handleFieldChange={handleFieldChange}
          {...this.props}
        />
        :null}
        </div>
      );
    }
  }
  return ScreenHoc;
};
export default hoc;
