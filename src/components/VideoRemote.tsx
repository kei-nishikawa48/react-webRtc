import Video from "./Video";
import RTCClient from "../utils/RTCClient";

const VideoRemote = ({ rtcClient }: { rtcClient: RTCClient }) => {
  //todo:videoref はrtcClientに持たせる
  const videoRef = rtcClient.remoteVideoRef;
  return (
    <>
      <Video
        isLocal={false}
        name={rtcClient.remotePeerName}
        videoRef={videoRef}
      />
    </>
  );
};

export default VideoRemote;
