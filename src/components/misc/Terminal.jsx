import React, { useState, useEffect } from "react";

export default function Terminal({
  children,
  loginDate = "Wed Sep 25 09:11:04",
  host = "ttys002",
  bashStart = "$",
  typing = false,
  delay = 100,
  OSstate = "default"
}) {
  const [counter, setCounter] = useState(0);
  const [currentOSstate, setOSstate] = useState(OSstate);
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
  if (currentOSstate === "maximized") {
    return <></>;
  }
  return (
    <div className="w-full shadow-2xl subpixel-antialiased rounded bg-black h-64 border-black mx-auto">
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
        className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black"
        id="console"
      >
        <p className="pb-1">
          Last login: {loginDate} on {host}
        </p>
        <pre className="pb-1">
          {bashStart} {message}
          <span className="terminal-cursor"> </span>
        </pre>
      </div>
    </div>
  );
}
