import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import MainHead from "./components/MainHead.js";
import Footer from "./components/Footer.js";
import Content from "./components/Content.js";

class App extends React.Component {
  render() {
    return (
      <div className="App bg-img">
        {/**Main head including Bootstrap*/}
        <MainHead />
        {/** Page Title*/}
        <Header name="Feba Thampan" />
        {/** All the content for the page */}
        <Content />
        {/**Footer*/}
        <Footer year="2024" />
      </div>
    );
  }
}

export default App;
