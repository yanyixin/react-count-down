import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';
import { Hello } from "./components/Hello";

export class App extends React.Component<{}, object>{
  render() {
    return (
      <Hello name="萌萌!" />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement
);
