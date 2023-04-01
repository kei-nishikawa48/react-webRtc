import { useEffect, useRef } from "react";
import Video from "./Video";
import RTCClient from "../utils/RTCClient";

const VideoRemote = ({ rtcClient }: { rtcClient: RTCClient }) => {
  const videoRef = null;
  return (
    <>
      <Video
        isLocal={false}
        name={rtcClient.remotePeerName}
        videoRef={videoRef}
      />
    </>
  );
};
export default VideoRemote;
