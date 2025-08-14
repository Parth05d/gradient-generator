import React, { useState } from "react";

export default function DisplayCode({
  dir,
  setDir,
  dirTailwind,
  setDirTailwind,
  bgColor1,
  bgColor2,
}) {
  const [alertMsg, setAlertMsg] = useState("");

  const showAlert = (message) => {
    setAlertMsg(message);
    setTimeout(() => setAlertMsg(""), 1000);
  };

  const handleCopyToClipboard = () => {
    const text = `background-image: "linear-gradient(${dir}, ${bgColor1}, ${bgColor2})"`;
    navigator.clipboard.writeText(text);
    showAlert("CSS code copied!");
  };

  const handleCopyToClipboardTailwind = () => {
    const text = `bg-gradient-to-${dirTailwind} from-[${bgColor1}] to-[${bgColor2}]`;
    navigator.clipboard.writeText(text);
    showAlert("Tailwind code copied!");
  };

  return (
    <div className=" py-3 px-5 my-5 mx-3 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 shadow-lg text-zinc-700 font-semibold hover:bg-white/100 transition-all duration-300">
      {/* Alert */}
      {alertMsg && (
        <div className="top-2 right-2 bg-green-500 text-white text-sm px-3 py-1 my-3 rounded-xl shadow-md animate-fadeIn">
          {alertMsg}
        </div>
      )}

      {/* CSS Code */}
      <div className="flex items-center justify-between">
        <p className="text-xl">Your Gradient Code (CSS):</p>
        <i
          className="fa-regular fa-clipboard text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={handleCopyToClipboard}
        ></i>
      </div>

      <p className="my-5 mx-3 break-all">
        <i className="fa-solid fa-arrow-right mr-3" />
        background-image: linear-gradient({dir}, {bgColor1}, {bgColor2})
      </p>

      {/* Tailwind Code */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-xl">Your Gradient Code (Tailwind CSS):</p>
        <i
          className="fa-regular fa-clipboard text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={handleCopyToClipboardTailwind}
        ></i>
      </div>

      <p className="my-5 mx-3 break-all">
        <i className="fa-solid fa-arrow-right mr-3" />
        bg-gradient-to-{dirTailwind} from-[{bgColor1}] to-[{bgColor2}]
      </p>
    </div>
  );
}
