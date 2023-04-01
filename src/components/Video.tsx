const Video = ({
  name,
  videoRef,
  isLocal,
}: {
  name: string;
  videoRef: React.RefObject<HTMLVideoElement> | null;
  isLocal: boolean;
}) => {
  console.log(videoRef);
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-full"
        muted={isLocal}
        autoPlay={true}
        ref={videoRef}
      />
      <div>{name}</div>
    </div>
  );
};

export default Video;
