import { FC, useState } from "react";
import InputForm from "./InputForm";

const InputRemoteForm: FC<{
  setRemotePeerName: (name: string) => void;
  remotePeerName: string;
}> = ({ setRemotePeerName, remotePeerName }) => {
  return (
    <InputForm
      name={"相手"}
      setPeerName={setRemotePeerName}
      peerName={remotePeerName}
    />
  );
};

export default InputRemoteForm;
