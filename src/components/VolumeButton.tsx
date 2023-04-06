import { SetStateAction, useState } from "react";
import VolumeOffIcon from "./VoluemOffIcon";
import VolumeUpIcon from "./VolumeUpIcon";

const VolumeButton = ({
  muted,
  setMuted,
}: {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const Icon = muted ? VolumeOffIcon : VolumeUpIcon;
  return (
    <button
      className=" rounded-full p-3 bg-gray-50 hover:bg-gray-200 "
      onClick={() => {
        setMuted((muted) => !muted);
      }}
    >
      <Icon />
    </button>
  );
};

export default VolumeButton;
