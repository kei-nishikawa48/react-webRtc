const InputRemoteForm = () => {
  return (
    <main className="bg-slate-600 w-full h-screen">
      <h1 className=" text-white text-xl">webRTC</h1>

      <div className=" h-full text-center">
        <h1 className="text-xl text-white">相手の名前を入力してください</h1>
        <div>
          <label htmlFor="name" className="text-white">
            名前
          </label>
          <input name="name" />
        </div>
        <button className=" rounded-sm bg-blue-400 px-3 py-1 hover:bg-blue-500">
          test
        </button>
      </div>
    </main>
  );
};

export default InputRemoteForm;
