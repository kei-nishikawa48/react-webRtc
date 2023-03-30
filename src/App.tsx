import "./index.css";
import InputLocalForm from "./components/InputLocalForm";
import InputRemoteForm from "./components/InputRemoteForm";
import VideoArea from "./components/VideoArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [localPeerName, setLocalPeerName] = useState("");
  const [remotePeerName, setRemotePeerName] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <InputLocalForm
              localPeerName={localPeerName}
              setLocalPeerName={setLocalPeerName}
            />
          }
        />
        <Route
          path="/remote"
          element={
            <InputRemoteForm
              setRemotePeerName={setRemotePeerName}
              remotePeerName={remotePeerName}
            />
          }
        />
        <Route
          path="/video"
          element={
            <VideoArea
              remotePeerName={remotePeerName}
              localPeerName={localPeerName}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
