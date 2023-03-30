import { FC, useState } from "react";

const InputForm: FC<{
  name: string;
  setPeerName: (name: string) => void;
  peerName: string;
}> = ({ name, setPeerName, peerName }) => {
  console.log(!!peerName);
  return (
    <main className="bg-slate-600 w-full ">
      <h1 className=" text-white text-xl">webRTC</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" h-full text-center"
      >
        <h1 className="text-xl text-white">{name}の名前を入力してください</h1>
        <div>
          <label htmlFor="name" className="text-white">
            名前
          </label>
          <input
            value={peerName}
            name="name"
            onChange={(e) => {
              setPeerName(e.target.value);
            }}
          />
        </div>
        <button
          disabled={!peerName}
          className={
            !peerName
              ? " bg-gray-500 text-white font-bold py-2 px-4 rounded"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
        >
          登録
        </button>
      </form>
    </main>
  );
};

export default InputForm;
