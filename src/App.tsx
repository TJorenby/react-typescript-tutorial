import React from "react";
import "./App.css";
import { AddToList, List } from "./components";

export interface IState {
  people: { name: string; age: number; url: string; note?: string }[];
}

function App() {
  const [people, setPeople] = React.useState<IState["people"]>([
    { name: "Michael Jordan", url: "", age: 35, note: "Good guy" },
  ]);

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
