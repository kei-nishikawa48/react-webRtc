import { FC } from "react";
import VideoLocal from "./VideoLocal";
import VideoRemote from "./VideoRemote";
import RTCClient from "../utils/RTCClient";
import { useNavigate } from "react-router-dom";

const VideoArea = ({ rtcClient }: { rtcClient: RTCClient }) => {
  const navigate = useNavigate();
  console.log(rtcClient);
  if (rtcClient.localPeerName === "" || rtcClient.remotePeerName === "") {
    navigate("/");
  }
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="w-full bg-gray-50 p-4">
        <div id="video" className="h-96 flex items-center justify-center">
          <VideoLocal localPeerName={rtcClient.localPeerName} />
        </div>
      </div>
      <div className="w-full bg-gray-50 p-4">
        <div id="video" className=" h-96 flex items-center justify-center">
          <VideoRemote remotePeerName={rtcClient.remotePeerName} />
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
