import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changePageTitle(title){
    this.setState({title})
  }

  render() {
    return (
      <div>
        <Header changePageTitle={this.changePageTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    )
  }
}
