import { FC, useEffect } from "react";
import VideoLocal from "./VideoLocal";
import VideoRemote from "./VideoRemote";
import RTCClient from "../utils/RTCClient";
import { useNavigate } from "react-router-dom";

const VideoArea = ({ rtcClient }: { rtcClient: RTCClient }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (rtcClient.localPeerName === "" || rtcClient.remotePeerName === "") {
      navigate("/");
    }
  }, []);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full">
        <VideoLocal rtcClient={rtcClient} />
      </div>
      <div className="w-full">
        <VideoRemote rtcClient={rtcClient} />
      </div>
    </div>
  );
};

export default VideoArea;
