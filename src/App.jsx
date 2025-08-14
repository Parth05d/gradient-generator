import { useState } from "react";
import "./App.css";
import Directions from "./components/Directions";
import DisplayCode from "./components/DisplayCode";

function App() {
  const [bgColor1, setBgColor1] = useState("#2cbbbc");
  const [bgColor2, setBgColor2] = useState("#384af9");
  const [dir, setDir] = useState("to right");
  const [dirTailwind, setDirTailwind] = useState("r");

  const randomHexColor = () => {
    const hexRange = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleBtn1 = () => {
    let randomColor1 = randomHexColor();
    setBgColor1(randomColor1);
  };

  const handleBtn2 = () => {
    let randomColor2 = randomHexColor();
    setBgColor2(randomColor2);
  };

  const handleRandom = () => {
    let randomColor1 = randomHexColor();
    setBgColor1(randomColor1);
    let randomColor2 = randomHexColor();
    setBgColor2(randomColor2);
  };

  return (
    <>
      <div
        className="h-screen w-full flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(${dir}, ${bgColor1}, ${bgColor2})`,
        }}
      >
        <div>
          <div className="text-center">
            <button
              className="py-2 px-3 mx-3 rounded-xl
               bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300"
              onClick={handleBtn1}
            >
              {bgColor1}
            </button>
            <button
              className="py-2 px-3 mx-3 rounded-xl
               bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300"
              onClick={handleBtn2}
            >
              {bgColor2}
            </button>

            <button
              className="py-2 px-3 mx-3 rounded-xl
               bg-white/80 backdrop-blur-md border border-white/30
               shadow-lg text-zinc-700 font-semibold
               hover:bg-white/100 transition-all duration-300"
              onClick={handleRandom}
            >
              Random
            </button>
          </div>
          <Directions
            dir={dir}
            setDir={setDir}
            dirTailwind={dirTailwind}
            setDirTailwind={setDirTailwind}
            bgColor1={bgColor1}
            bgColor2={bgColor2}
          />
          <DisplayCode
            dir={dir}
            setDir={setDir}
            dirTailwind={dirTailwind}
            setDirTailwind={setDirTailwind}
            bgColor1={bgColor1}
            bgColor2={bgColor2}
          />
        </div>
      </div>
      <footer className="text-center p-4 bg-transparent text-white/70 absolute bottom-0 w-full">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Parth05d"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-white transition"
          >
            Parth Darji
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
