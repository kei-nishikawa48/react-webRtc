import { FC } from "react";
import VideoLocal from "./VideoLocal";
type Props = {
  localPeerName: string;
  remotePeerName: string;
};
const VideoArea: FC<Props> = ({ localPeerName, remotePeerName }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="w-full bg-gray-50 p-4">
        <div id="video" className="h-96 flex items-center justify-center">
          <VideoLocal localPeerName={localPeerName} />
        </div>
      </div>
      <div className="w-full bg-gray-50 p-4">
        <div id="video" className=" h-96 flex items-center justify-center">
          video
        </div>
        <div className="flex justify-between">
          <p>{remotePeerName}</p>
          <button type="button">icon</button>
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
