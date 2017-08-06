import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';
import CountDown from 'Components/CountDown';
import { IndexInterfaceState } from 'Interface/types'

export class App extends React.Component<any, IndexInterfaceState>{
  private phoneInput: HTMLInputElement; // 定义 phoneVal 的类型
  constructor(props: any) {
    super(props);

    this.state = {
      defaultTip: "获取验证码",
      countDownTip: "请耐心等待",
      phone: '',
      isNeedValidatePhone: true
    }
  }

  public changePhone(e: any): void {
    this.setState({
      phone : e.target.value
    });
  }

  public render() {
    const {defaultTip, countDownTip, phone, isNeedValidatePhone} = this.state;
    return (
      <div className="app-wrapper">
        <div className="input-wrapper">
          <label className="input-label">手机号码：</label>
          <input
            className="phone-input"
            type="text"
            maxLength={11}
            onChange={e => this.changePhone(e)}
            value={phone}
            ref={input => this.phoneInput = input}
          />
        </div>
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
