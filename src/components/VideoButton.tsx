import RTCClient from "../utils/RTCClient";
import VideoCameraOffIcon from "./VideoCameraOffIcon";
import VideoCameraOnIcon from "./VideoCameraOnIcon";
const VideoButton = ({
  videoOff,
  setVideoOff,
  rtcClient,
  isLocal,
}: {
  videoOff: boolean;
  setVideoOff: React.Dispatch<React.SetStateAction<boolean>>;
  rtcClient: RTCClient;
  isLocal: boolean;
}) => {
  const VideoCameraToggleIcon = videoOff
    ? VideoCameraOffIcon
    : VideoCameraOnIcon;
  return (
    <button
      onClick={() => {
        if (isLocal) {
          rtcClient.toggleVideo();
        }
        setVideoOff((videoOff) => !videoOff);
      }}
      className="rounded-full bg-slate-50 hover:bg-slate-200 p-3"
    >
      <VideoCameraToggleIcon />
    </button>
  );
};

export default VideoButton;
