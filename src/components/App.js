import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
