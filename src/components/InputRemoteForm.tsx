import { useState } from "react";
import InputForm from "./InputForm";

const InputRemoteForm = () => {
  const [remotePeerName, setRemotePeerName] = useState("");
  return (
    <InputForm
      name={"相手"}
      setPeerName={setRemotePeerName}
      peerName={remotePeerName}
    />
  );
};

export default InputRemoteForm;
