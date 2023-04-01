import "./index.css";
import InputLocalForm from "./components/InputLocalForm";
import InputRemoteForm from "./components/InputRemoteForm";
import VideoArea from "./components/VideoArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RTCClient from "./utils/RTCClient";
const App = () => {
  const rtcClinet = new RTCClient();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputLocalForm rtcClient={rtcClinet} />} />
        <Route
          path="/remote"
          element={<InputRemoteForm rtcClient={rtcClinet} />}
        />
        <Route path="/video" element={<VideoArea rtcClient={rtcClinet} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
