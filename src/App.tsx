import React from "react";
import "./App.css";

interface AppProps {
  title: string;
}

const App = (props: AppProps) => {
  return (
    <div>
      <h1>Hello {props.title}</h1>
    </div>
  );
};

export default App;
