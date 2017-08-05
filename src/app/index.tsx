import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';
import CountDown from '../components/CountDown/index';
import { TIME, RULES, ERROR_CODE } from "../module/config";
import { IndexInterface } from './interface'

export class App extends React.Component<any, any>{
  private phoneInput: HTMLInputElement; // 定义 phoneVal 的类型
  constructor(props: any) {
    super(props);

    this.state = {
      defaultTip: "获取验证码",
      countDownTip: "请耐心等待",
      phone: '135****6968',
      isNeedValidatePhone: false
    }
  }

  public clickMe(): void {
    const phoneVal = this.phoneInput.value;
    this.setState({
      phone : phoneVal
    });
  }

  public render() {
    console.log('this.state',this.state);
    const {defaultTip, countDownTip, phone, isNeedValidatePhone} = this.state;
    return (
      <div className="app-wrapper">
        <input
          className="phone-input"
          type="text"
          ref={input => this.phoneInput = input}
        />
        <div onClick={() => this.clickMe()}>点我</div>
        <CountDown
          defaultTip={defaultTip}
          countDownTip={countDownTip}
          phone={phone}
          isNeedValidatePhone={isNeedValidatePhone}
          waitTime={10}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement
);
