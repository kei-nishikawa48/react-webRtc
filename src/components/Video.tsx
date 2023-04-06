import { useState } from "react";
import VolumeButton from "./VolumeButton";
import RTCClient from "../utils/RTCClient";
import VideoCameraOffIcon from "./VideoCameraOffIcon";
import VideoCameraOnIcon from "./VideoCameraOnIcon";
import VideoButton from "./VideoButton";

const Video = ({
  name,
  videoRef,
  isLocal,
  rtcClient,
}: {
  name: string;
  videoRef: React.RefObject<HTMLVideoElement> | null;
  isLocal: boolean;
  rtcClient: RTCClient;
}) => {
  const [muted, setMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(true);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center text-center  box-border h-96 bg-gray-50">
        <video
          className="w-full max-h-96"
          muted={isLocal || muted}
          autoPlay={true}
          ref={videoRef}
        />
      </div>
      <p className="p-3 text-lg">{name}</p>
      <div className="w-full flex justify-between">
        <VolumeButton
          isLocal={isLocal}
          setMuted={setMuted}
          rtcClient={rtcClient}
          muted={muted}
        />
        {isLocal && (
          <VideoButton
            videoOff={videoOff}
            setVideoOff={setVideoOff}
            rtcClient={rtcClient}
            isLocal={isLocal}
          />
        )}
      </div>
    </>
  );
};

export default Video;
