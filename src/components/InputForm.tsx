import { FC, useState } from "react";

const InputForm: FC<{
  name: string;
  setPeerName: (name: string) => void;
  peerName: string;
}> = ({ name, setPeerName, peerName }) => {
  return (
    <main className="bg-slate-600 w-full ">
      <h1 className=" text-white text-xl">webRTC</h1>

      <div className=" h-full text-center">
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
        <button className=" rounded-sm bg-blue-400 px-3 py-1 hover:bg-blue-500">
          登録
        </button>
      </div>
    </main>
  );
};

export default InputForm;
