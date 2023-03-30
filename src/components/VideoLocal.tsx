import { useEffect, useRef } from "react";
import Video from "./Video";

const VideoLocal = ({ localPeerName }: { localPeerName: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef === null) return;
    const currentVideoRef = videoRef.current;
    if (currentVideoRef === null) return;
    console.log(videoRef);
    const getMedia = async () => {
      const constraints: MediaStreamConstraints = {
        audio: true,
        video: true,
      };

      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(
          constraints
        );
        currentVideoRef.srcObject = mediaStream;
      } catch (er) {
        console.error(er);
      }
    };
    (async () => {
      await getMedia();
    })();
  }, [videoRef]);
  return (
    <>
      <Video isLocal={true} name={localPeerName} videoRef={videoRef} />
    </>
  );
};
export default VideoLocal;
