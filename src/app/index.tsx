import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';
import CountDown from '../components/CountDown/index';
import { Hello } from "./components/Hello";
import { IndexInterface } from './interface'

export class App extends React.Component<{}, any>{
  constructor(props: any) {
    super(props);

    this.state = {
      defaultTip: "获取验证码",
      countDownTip: "请耐心等待",
      phone: '135****6968'
    }
  }

  render() {
    console.log('this.state',this.state);
    const {defaultTip, countDownTip, phone} = this.state;
    return (
      <div className="app-wrapper">
        <CountDown
          defaultTip={defaultTip}
          countDownTip={countDownTip}
          phone={phone}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement
);
