import { useEffect, useRef } from "react";
import Video from "./Video";

const VideoRemote = ({ remotePeerName }: { remotePeerName: string }) => {
  const videoRef = null;
  return (
    <>
      <Video isLocal={false} name={remotePeerName} videoRef={videoRef} />
    </>
  );
};
export default VideoRemote;
