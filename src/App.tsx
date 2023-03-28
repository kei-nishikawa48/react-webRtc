import { useState } from "react";
import "./index.css";
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
    <main className="bg-slate-600 w-full h-screen">
      <h1 className=" text-white text-xl">webRTC</h1>
      <div className=" h-full text-center flex  justify-center items-center">
        <div>
          <label htmlFor="name">名前</label>
          <input name="name" />
        </div>
        <button className=" rounded-sm bg-blue-400 px-3 py-1 hover:bg-blue-500">
          test
        </button>
      </div>
    </main>
  );
};

export default App;
