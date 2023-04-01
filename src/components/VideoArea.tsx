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
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="w-full bg-gray-50 p-4">
        <div id="video" className="h-96 flex items-center justify-center">
          <VideoLocal rtcClient={rtcClient} />
        </div>
      </div>
      <div className="w-full bg-gray-50 p-4">
        <div id="video" className=" h-96 flex items-center justify-center">
          <VideoRemote rtcClient={rtcClient} />
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
