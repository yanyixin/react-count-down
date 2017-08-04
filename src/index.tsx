import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
  <Hello name="萌萌" />,
  document.getElementById("example") as HTMLElement
);
