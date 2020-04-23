import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import WordStory from "./pages/WordStory";
import PictureStory from "./pages/PictureStory";
import UploadPicture from "./pages/UploadPicture";
import Chat from "./components/Chat";
import chatbot from "./chatbot.png";
import Review from "./pages/Review";
import HowTo from "./pages/HowTo";
//import "milligram";

function App() {
  const [chat, setChat] = useState(false);
  return (
    <div className="App">
      <header></header>
      <NavBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/how-to" component={HowTo} />
        <Route path="/story-word" component={WordStory} />
        <Route path="/story-picture" component={PictureStory} />
        <Route path="/upload-picture" component={UploadPicture} />
        <Route path="/review" component={Review} />
      </Switch>
      <div style={{ height: "125px" }}>
        <button class="chat-button" onClick={() => setChat(!chat)}>
          <img
            style={{ width: "20%", marginTop: "20px" }}
            src={chatbot}
            alt="chatbot"
          />
        </button>
        {chat === true ? <Chat /> : null}
      </div>
    </div>
  );
}

export default App;
