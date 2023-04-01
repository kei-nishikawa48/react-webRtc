import { useEffect, useRef } from "react";
import Video from "./Video";
import RTCClient from "../utils/RTCClient";

const VideoLocal = ({ rtcClient }: { rtcClient: RTCClient }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStream = rtcClient.mediaStream;
  useEffect(() => {
    if (videoRef === null) return;
    const currentVideoRef = videoRef.current;
    if (currentVideoRef === null) return;
    currentVideoRef.srcObject = mediaStream;
  }, [videoRef, mediaStream]);
  return (
    <>
      <Video
        isLocal={true}
        name={rtcClient.localPeerName}
        videoRef={videoRef}
      />
    </>
  );
};
export default VideoLocal;
