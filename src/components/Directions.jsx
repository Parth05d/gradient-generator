import React from "react";
import {
  ImArrowDownRight2,
  ImArrowUpLeft2,
  ImArrowUpRight2,
  ImArrowDownLeft2,
} from "react-icons/im";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function Directions({
  dir,
  setDir,
  dirTailwind,
  setDirTailwind,
  bgColor1,
  bgColor2,
}) {
  const HandleToTop = () => {
    setDir("to top");
    setDirTailwind("t");
  };

  const HandleToBottom = () => {
    setDir("to bottom");
    setDirTailwind("b");
  };

  const HandleToLeft = () => {
    setDir("to left");
    setDirTailwind("l");
  };

  const HandleToRight = () => {
    setDir("to right");
    setDirTailwind("r");
  };

  const HandleToTopLeft = () => {
    setDir("to top left");
    setDirTailwind("tl");
  };

  const HandleToTopRight = () => {
    setDir("to top right");
    setDirTailwind("tr");
  };

  const HandleBottomLeft = () => {
    setDir("to bottom left");
    setDirTailwind("bl");
  };

  const HandleBottomRight = () => {
    setDir("to bottom right");
    setDirTailwind("br");
  };
  return (
    <div
      className="flex justify-evenly my-5 py-2 px-3 mx-3 rounded-xl
               bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300"
    >
      <div
        className="h-10 w-10bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300 rounded-xl p-2"
        onClick={HandleToTop}
      >
        <FaArrowUp size={23} />
      </div>
      <div
        className="h-10 w-10bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300 rounded-xl p-2"
        onClick={HandleToBottom}
      >
        <FaArrowDown size={23} />
      </div>
      <div
        className="h-10 w-10bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300 rounded-xl p-2"
        onClick={HandleToLeft}
      >
        <FaArrowLeft size={23} />
      </div>
      <div
        className="h-10 w-10bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300 rounded-xl p-2"
        onClick={HandleToRight}
      >
        <FaArrowRight size={23} />
      </div>
      <div
        className="h-10 w-10bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300 rounded-xl p-2"
        onClick={HandleToTopLeft}
      >
        <ImArrowUpLeft2 size={23} />
      </div>
      <div
        className="h-10 w-10bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300 rounded-xl p-2"
        onClick={HandleToTopRight}
      >
        <ImArrowUpRight2 size={23} />
      </div>
      <div
        className="h-10 w-10bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300 rounded-xl p-2"
        onClick={HandleBottomLeft}
      >
        <ImArrowDownLeft2 size={23} />
      </div>
      <div
        className="h-10 w-10bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300 rounded-xl p-2"
        onClick={HandleBottomRight}
      >
        <ImArrowDownRight2 size={23} />
      </div>
    </div>
  );
}
