import { useCallback, useState } from "react";
import RTCClient from "../utils/RTCClient";
import InputForm from "./InputForm";
import { useNavigate } from "react-router-dom";

const InputLocalForm = ({ rtcClient }: { rtcClient: RTCClient }) => {
  const [peerName, setPeerName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    async (e) => {
      e.preventDefault();
      await rtcClient.startListening(peerName);

      navigate("/remote");
    },
    [peerName, rtcClient]
  );

  return (
    <InputForm
      name={"自分"}
      peerName={peerName}
      setPeerName={setPeerName}
      handleSubmit={handleSubmit}
    />
  );
};

export default InputLocalForm;
