import { useState } from "react";
import VolumeButton from "./VolumeButton";

const Video = ({
  name,
  videoRef,
  isLocal,
}: {
  name: string;
  videoRef: React.RefObject<HTMLVideoElement> | null;
  isLocal: boolean;
}) => {
  const [muted, setMuted] = useState(false);
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
      <div className="w-full">
        <p className="p-3 text-lg">{name}</p>
        <VolumeButton setMuted={setMuted} muted={muted} />
      </div>
    </>
  );
};

export default Video;
