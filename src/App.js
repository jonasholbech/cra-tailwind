// src/App.js
import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import CheckBox from "./components/forms/CheckBox";
import Terminal from "./components/misc/Terminal";
function App() {
  return (
    <>
      <div className="flex flex-wrap w-3/4 mx-auto my-12 items-center">
        <h1>Super cool page</h1>
        <Button onClick={() => console.log("I was clicked")}>
          I am a button
        </Button>
        <Button type="light" onClick={() => console.log("I was clicked")}>
          I am a button
        </Button>
      </div>
      <div className="flex flex-wrap">
        <Card category={"Business"} />
        <Card category={"Business"} />
      </div>
      <div className="flex flex-wrap">
        <Card2 followers="0" />
        <Card2 followers="1" />
      </div>
      <div className="flex flex-wrap">
        <CheckBox
          onChange={() => {
            console.log("button changed");
          }}
        >
          Click me please
        </CheckBox>
        <CheckBox checked>This is the label</CheckBox>
      </div>
      <div className="flex">
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
    </>
  );
}

export default App;
