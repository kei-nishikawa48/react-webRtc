import InputForm from "./InputForm";

import { useNavigate } from "react-router-dom";

const InputRemoteForm = ({
  remotePeerName,
  setRemotePeerName,
}: {
  remotePeerName: string;
  setRemotePeerName: (name: string) => void;
}) => {
  const navigate = useNavigate();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    navigate("/video");
  };
  return (
    <InputForm
      name={"相手"}
      setPeerName={setRemotePeerName}
      peerName={remotePeerName}
      handleSubmit={handleSubmit}
    />
  );
};

export default InputRemoteForm;
