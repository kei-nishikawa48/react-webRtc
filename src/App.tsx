import { useState } from "react";
import "./index.css";
import InputLocalForm from "./components/InputLocalForm";
import InputRemoteForm from "./components/InputRemoteForm";
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
    <>
      <InputLocalForm />
      <InputRemoteForm />
    </>
  );
};

export default App;
