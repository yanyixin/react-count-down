/**
 * Created by yanmeng on 2017/8/5.
 */
import * as React from "react";
import * as classnames from 'classnames';
import {TEXT, TIME, RULES, ERROR_CODE} from '../../module/config';
import './index.scss';

interface CountDownProps {
  defaultTip?: string,
  countDownTip?: string,
  isNeedValidatePhone: boolean,
  phone?: string,
  waitTime?: number,
  countDownTime?: number
}

interface CountDownState {
  pending: boolean,
  disabled: boolean,
  buttonContent: string,
  buttonDefaultContent: string,
  count: number,
  countDownTip: string,
  countDownTime: number
}

export default class CountDown extends React.Component<CountDownProps, CountDownState> {

  private countInterval: number;

  constructor(props: CountDownProps) {
    super(props);
    const {defaultTip, waitTime, countDownTip, countDownTime} = this.props;
    this.state = {
      pending: false,
      disabled: false,
      buttonDefaultContent: defaultTip || TEXT.COUNT_DOWN_DEFAULT_CONTENT,
      buttonContent: defaultTip || TEXT.COUNT_DOWN_DEFAULT_CONTENT,
      countDownTip: countDownTip || TEXT.COUNT_DOWN_TIP,
      count: waitTime || TIME.WAIT_TIME,
      countDownTime: countDownTime || TIME.COUNT_DOWN_TIME
    };
  }

  public handleClick(): void {
    const {pending, disabled} = this.state;
    const {isNeedValidatePhone} = this.props;
    if(pending || disabled) return;
    if(isNeedValidatePhone) {
      if(!this.validatePhone) return;
    }
    // this.setButtonIsPending();
    this.countDownHandler();
    // this.setButtonIsDisabled();
  }

  // 校验手机号
  private validatePhone(v: string) {
    if(v.length < 1) {
      alert(ERROR_CODE.PHONE_EMPTY);
      return false;
    } else if(!RULES.PHONE.test(v)) {
      alert(ERROR_CODE.PHONE_ERROR);
      return false;
    } else {
      return true;
    }
  }

  // 设置按钮为 pending 状态
  private setButtonIsPending(): void {
    this.setState({
      pending: true,
      buttonContent: TEXT.COUNT_DOWN_PENDING
    })
  }

  // 设置按钮为 disabled 状态
  // private setButtonIsDisabled(): void {
  //   this.setState({
  //     pending: false
  //   })
  // }

  // 设置按钮为可用状态
  private setButtonIsUsable(): void {
    const {buttonDefaultContent} = this.state;
    this.setState({
      pending: false,
      disabled: false,
      buttonContent: buttonDefaultContent
    })
  }

  // 倒计时
  private countDownHandler() {
    const {count, countDownTime, countDownTip} = this.state;
    let newCount: number = count;
    this.countInterval = setInterval(() => {
      if(newCount <= 0) {
        clearInterval(this.countInterval);
        this.setButtonIsUsable();
        return;
      }
      this.setState({
        pending: false,
        disabled: true,
        buttonContent: `${countDownTip}${newCount}s`
      });
      newCount --;
    },countDownTime)
  }

  public render() {
    const {pending, disabled, buttonContent} = this.state;
    const countDownClassNames:any = classnames({
      'count-down-wrapper': true,
      'pending': pending,
      'disabled': disabled
    });
    console.log('TIME',TIME);
    return (
      <div className={countDownClassNames} onClick={() => this.handleClick()}>
        {buttonContent}
      </div>
    );
  }
}
