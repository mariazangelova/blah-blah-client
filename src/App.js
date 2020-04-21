import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import WordStory from "./pages/WordStory";
import PictureStory from "./pages/PictureStory";
import Chat from "./components/ChatApp";
import UploadImage from "./components/UploadImage";
//import "milligram";

function App() {
  return (
    <div className="App">
      <header></header>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/story-word" component={WordStory} />
        <Route path="/story-picture" component={PictureStory} />
        <Route path="/upload-picture" component={UploadImage} />
      </Switch>
      <Chat />
    </div>
  );
}

export default App;
