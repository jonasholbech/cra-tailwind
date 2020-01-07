// src/App.js
import React, { Suspense, useState } from "react";
import Nav from "./components/Nav";
const Card = React.lazy(() => import("./components/Card"));
const Card2 = React.lazy(() => import("./components/Card2"));
const CheckBox = React.lazy(() => import("./components/forms/CheckBox"));
const Terminal = React.lazy(() => import("./components/misc/Terminal"));
const Button = React.lazy(() => import("./components/forms/Button"));

function App() {
  const [active, setActive] = useState(new Set(["Terminals"]));
  const available = [
    "Buttons",
    "Cards",
    "Secondary Cards",
    "Checkboxes",
    "Terminals"
  ];
  function activeChanged(val) {
    const copy = new Set(active);
    if (copy.has(val.target.value)) {
      copy.delete(val.target.value);
    } else {
      copy.add(val.target.value);
    }
    setActive(copy);
  }
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6">
      <Nav available={available} active={active} onChange={activeChanged}></Nav>

      {active.has("Buttons") && (
        <Suspense fallback="loading">
          <div className="flex flex-wrap justify-around">
            <Button onClick={() => console.log("I was clicked")}>
              I am a button
            </Button>

            <Button type="light" onClick={() => console.log("I was clicked")}>
              I am a button
            </Button>

            <Button
              disabled={true}
              type="light"
              onClick={() => console.log("I was clicked")}
            >
              I am disabled
            </Button>
          </div>
        </Suspense>
      )}
      {active.has("Cards") && (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-wrap justify-around">
            <Card category={"Business"} />
            <Card category={"Business"} />
          </div>
        </Suspense>
      )}
      {active.has("Secondary Cards") && (
        <Suspense fallback={<div>Loading</div>}>
          <div className="flex flex-wrap justify-around">
            <Card2 followers="0" />
            <Card2 followers="1" />
          </div>
        </Suspense>
      )}

      {active.has("Checkboxes") && (
        <Suspense fallback={<div>Loading</div>}>
          <div className="flex flex-wrap justify-around">
            <CheckBox
              onChange={() => {
                console.log("button changed");
              }}
            >
              Click me please
            </CheckBox>
            <CheckBox checked>This is the label</CheckBox>
          </div>
        </Suspense>
      )}

      {active.has("Terminals") && (
        <Suspense fallback={<div>Loading</div>}>
          <div className="flex flex-wrap justify-around">
            <div class="w-auto m-1">
              <Terminal>{`git init
git add --all
git commit -m "initial commit"
git init
git add --all
git commit -m "initial commit"
git init
git add --all
git commit -m "initial commit"
git init
git add --all
git commit -m "initial commit"
git init
git add --all
git commit -m "initial commit"
git init
git add --all
git commit -m "initial commit"`}</Terminal>
            </div>
            <div class="w-auto m-1">
              <Terminal typing={true} delay="50">
                {`git init
git add --all
git commit -m "initial commit"
`}
              </Terminal>
            </div>
          </div>
        </Suspense>
      )}
    </div>
  );
}

export default App;
