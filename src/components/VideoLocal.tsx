import { useEffect, useRef } from "react";

const VideoLocal = () => {
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
      <video ref={videoRef} />
    </>
  );
};
export default VideoLocal;
