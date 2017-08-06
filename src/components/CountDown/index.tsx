/**
 * Created by yanmeng on 2017/8/5.
 */
import * as React from "react";
import * as classnames from 'classnames';
import {TEXT, TIME, RULES, ERROR_CODE, URLS} from 'Module/config';
import PromiseFunc from 'Module/util';
import './index.scss';
import { IndexInterfaceState } from 'Interface/types';
import {CountDownState, responseData} from './types'

class CountDown extends React.Component<IndexInterfaceState, CountDownState> {

  private countInterval: number;

  public static defaultProps = {
    defaultTip: TEXT.COUNT_DOWN_DEFAULT_CONTENT,
    buttonDefaultContent: TEXT.COUNT_DOWN_DEFAULT_CONTENT,
    buttonContent: TEXT.COUNT_DOWN_DEFAULT_CONTENT,
    countDownTip: TEXT.COUNT_DOWN_TIP,
    count: TIME.WAIT_TIME,
    countDownTime: TIME.COUNT_DOWN_TIME
  };

  constructor(props: IndexInterfaceState) {
    super(props);
    const {defaultTip, waitTime} = this.props;
    this.state = {
      pending: false,
      disabled: false,
      buttonDefaultContent: defaultTip,
      buttonContent: defaultTip,
      count: waitTime,
    };
  }

  public handleClick(): void {
    const {pending, disabled} = this.state;
    const {isNeedValidatePhone, phone} = this.props;
    if(pending || disabled) return;
    if(isNeedValidatePhone) {
      if(!this.validatePhone(phone)) return;
    }
    this.setButtonIsPending();
    this.sendData();
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
    const {count} = this.state;
    const {countDownTime, countDownTip} = this.props;
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

  // 发送请求
  private sendData() {
    return PromiseFunc(URLS.SUCCESS_URL).then((res: responseData) => {
      this.successHandler(res);
    }).catch((e: any) => {
      console.log('e', e);
      this.setButtonIsUsable();
      alert(ERROR_CODE.SERVER);
    })
  }

  // 请求成功的处理函数
  private successHandler(res: responseData) {
    const status = res.status;
    switch(status) {
      case 0:
        // 开始倒计时
        this.countDownHandler();
        break;
      case -123456:
        // 手机号码错误
        this.setButtonIsUsable();
        alert(res.message || ERROR_CODE.PHONE_ERROR);
        break;
      default:
        // 其他的错误
        this.setButtonIsUsable();
        alert(res.message || ERROR_CODE.NETWORK);
        break;
    }
  }

  public render() {
    const {pending, disabled, buttonContent} = this.state;
    const countDownClassNames:any = classnames({
      'count-down-wrapper': true,
      'pending': pending,
      'disabled': disabled
    });
    return (
      <div
        className={countDownClassNames}
        onClick={() => this.handleClick()}
      >
        {buttonContent}
      </div>
    );
  }
}
export default CountDown;
