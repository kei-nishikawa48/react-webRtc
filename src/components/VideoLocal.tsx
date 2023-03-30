import { useEffect, useRef } from "react";
import Video from "./Video";

const VideoLocal = ({ localPeerName }: { localPeerName: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentVideoRef = videoRef.current;
  useEffect(() => {
    if (!currentVideoRef) {
      return;
    }
    const getMedia = async () => {
      const constraints: MediaStreamConstraints = { audio: true, video: true };

      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(
          constraints
        );
        currentVideoRef.srcObject = mediaStream;
      } catch (er) {
        console.error(er);
      }
    };
    getMedia();
  }, [currentVideoRef]);
  return (
    <>
      <Video isLocal={true} name={localPeerName} videoRef={videoRef} />
    </>
  );
};
export default VideoLocal;
