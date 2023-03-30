import { useState } from "react";
import InputForm from "./InputForm";

const InputLocalForm = () => {
  const [localPeerName, setLocalPeerName] = useState("");
  return (
    <InputForm
      name={"自分"}
      setPeerName={setLocalPeerName}
      peerName={localPeerName}
    />
  );
};

export default InputLocalForm;
