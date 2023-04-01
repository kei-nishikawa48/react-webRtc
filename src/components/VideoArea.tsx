import { FC } from "react";
import VideoLocal from "./VideoLocal";
import VideoRemote from "./VideoRemote";

const VideoArea: FC<{ localPeerName: string; remotePeerName: string }> = ({
  localPeerName,
  remotePeerName,
}) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="w-full bg-gray-50 p-4">
        <div id="video" className="h-96 flex items-center justify-center">
          <VideoLocal localPeerName={localPeerName} />
        </div>
      </div>
      <div className="w-full bg-gray-50 p-4">
        <div id="video" className=" h-96 flex items-center justify-center">
          <VideoRemote remotePeerName={remotePeerName} />
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
