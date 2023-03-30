import { FC, useState } from "react";
import InputForm from "./InputForm";

type Props = {
  setLocalPeerName: (name: string) => void;
  localPeerName: string;
};
const InputLocalForm: FC<Props> = ({ setLocalPeerName, localPeerName }) => {
  return (
    <InputForm
      name={"自分"}
      setPeerName={setLocalPeerName}
      peerName={localPeerName}
    />
  );
};

export default InputLocalForm;
