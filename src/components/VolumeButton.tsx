import { SetStateAction, useState } from "react";
import VolumeOffIcon from "./VoluemOffIcon";
import VolumeUpIcon from "./VolumeUpIcon";
import RTCClient from "../utils/RTCClient";

const VolumeButton = ({
  isLocal,
  muted,
  setMuted,
  rtcClient,
}: {
  isLocal: boolean;
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
  rtcClient: RTCClient;
}) => {
  const Icon = muted ? VolumeOffIcon : VolumeUpIcon;
  return (
    <button
      className=" rounded-full p-3 bg-gray-50 hover:bg-gray-200 "
      onClick={() => {
        if (isLocal) {
          rtcClient.toggleAudio();
        }
        setMuted((muted) => !muted);
      }}
    >
      <Icon />
    </button>
  );
};

export default VolumeButton;
