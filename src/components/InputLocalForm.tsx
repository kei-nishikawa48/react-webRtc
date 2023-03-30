import InputForm from "./InputForm";
import { useNavigate } from "react-router-dom";

const InputLocalForm = ({
  setLocalPeerName,
  localPeerName,
}: {
  setLocalPeerName: React.Dispatch<React.SetStateAction<string>>;
  localPeerName: string;
}) => {
  const navigate = useNavigate();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    navigate("/remote");
  };
  return (
    <InputForm
      name={"自分"}
      setPeerName={setLocalPeerName}
      peerName={localPeerName}
      handleSubmit={handleSubmit}
    />
  );
};

export default InputLocalForm;
