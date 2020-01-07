import React, { useState, useEffect } from "react";
//TODO: restore minimized
//clean up conditional styles
export default function Terminal({
  children,
  loginDate = "Wed Sep 25 09:11:04",
  host = "ttys002",
  bashStart = "$",
  typing = false,
  delay = 100,
  OSstate = "open",
  interactive = false
}) {
  console.log(interactive);
  const [counter, setCounter] = useState(0);
  const [currentOSstate, setOSstate] = useState(OSstate);
  const [interactiveMessage, setIntercativeMessage] = useState("");
  useEffect(() => {
    if (typing && counter < children.length) {
      const interval = setInterval(() => {
        setCounter(counter => counter + 1);
      }, delay);
      return () => clearInterval(interval);
    }
  }, [typing, delay, counter, children.length]);
  const message = typing ? children.substring(0, counter) : children;
  if (currentOSstate === "closed") {
    return <></>;
  }
  if (currentOSstate === "minimized") {
    return <></>;
  }

  return (
    <div
      className={
        (currentOSstate === "maximized"
          ? "w-screen absolute top-0 left-0 h-screen"
          : "w-full h-64") +
        " shadow-2xl subpixel-antialiased rounded bg-black border-black mx-auto mb-16"
      }
    >
      <div
        className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
        id="headerTerminal"
      >
        <div
          className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
          id="closebtn"
          onClick={() => setOSstate("closed")}
        ></div>
        <div
          className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
          id="minbtn"
          onClick={() => setOSstate("minimized")}
        ></div>
        <div
          className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
          id="maxbtn"
          onClick={() => setOSstate("maximized")}
        ></div>
        <div className="mx-auto pr-16" id="terminaltitle">
          <p className="text-center text-sm">Terminal</p>
        </div>
      </div>

      <div
        className={
          (currentOSstate === "maximized" ? "h-screen" : "h-64") +
          " pl-1 pt-1 text-green-200 font-mono text-xs bg-black overflow-y-auto"
        }
        id="console"
      >
        <p className="p-1">
          Last login: {loginDate} on {host}
        </p>

        {!interactive && (
          <pre className="p-1">
            {bashStart} {message}
            <span className="terminal-cursor"> </span>
          </pre>
        )}
        {interactive && (
          <textarea
            className="p-1 bg-black text-white h-full w-full"
            onChange={e => setIntercativeMessage(e.target.value.substring(2))}
            value={`${bashStart} ${interactiveMessage}`}
          ></textarea>
        )}
      </div>
    </div>
  );
}
