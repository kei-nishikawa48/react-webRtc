import { useState } from "react";
import "./index.css";
import InputLocalForm from "./components/InputLocalForm";
import InputRemoteForm from "./components/InputRemoteForm";
import VideoArea from "./components/VideoArea";

const App = () => {
  const [localPeerName, setLocalPeerName] = useState("");
  const [remotePeerName, setRemotePeerName] = useState("");
  return (
    <>
      <InputLocalForm
        setLocalPeerName={setLocalPeerName}
        localPeerName={localPeerName}
      />
      <InputRemoteForm
        setRemotePeerName={setRemotePeerName}
        remotePeerName={remotePeerName}
      />
      <VideoArea
        localPeerName={localPeerName}
        remotePeerName={remotePeerName}
      />
    </>
  );
};

export default App;
