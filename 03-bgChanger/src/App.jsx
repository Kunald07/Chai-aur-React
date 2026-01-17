import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 rounded-full text-black shadow-lg py-1"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 rounded-full text-black shadow-lg py-1"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 rounded-full text-black shadow-lg py-1"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 rounded-full text-black shadow-lg py-1"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 rounded-full text-black shadow-lg py-1"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
