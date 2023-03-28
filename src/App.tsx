import { useState } from "react";
import "./App.css";
const getMedia = async () => {
  const constraints: MediaStreamConstraints = { audio: true, video: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (er) {
    console.error(er);
  }
};

getMedia();
const App = () => {
  return (
    <div className="App">
      <h1>webRTC</h1>
    </div>
  );
};

export default App;
