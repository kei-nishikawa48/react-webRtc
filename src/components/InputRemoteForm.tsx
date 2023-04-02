import { useState } from "react";
import RTCClient from "../utils/RTCClient";
import InputForm from "./InputForm";

import { useNavigate } from "react-router-dom";

const InputRemoteForm = ({ rtcClient }: { rtcClient: RTCClient }) => {
  const [peerName, setPeerName] = useState("");
  const navigate = useNavigate();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    rtcClient.connect(peerName);

    navigate("/video");
  };
  return (
    <InputForm
      name={"相手"}
      setPeerName={setPeerName}
      peerName={peerName}
      handleSubmit={handleSubmit}
    />
  );
};

export default InputRemoteForm;
