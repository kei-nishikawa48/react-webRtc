import "./index.css";
import InputLocalForm from "./components/InputLocalForm";
import InputRemoteForm from "./components/InputRemoteForm";
import VideoArea from "./components/VideoArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useRTCClient from "./hooks/useRtcClient";
const App = () => {
  const rtcClient = useRTCClient();
  if (rtcClient === null) return <></>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputLocalForm rtcClient={rtcClient} />} />
        <Route
          path="/remote"
          element={<InputRemoteForm rtcClient={rtcClient} />}
        />
        <Route path="/video" element={<VideoArea rtcClient={rtcClient} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
