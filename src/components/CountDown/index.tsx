/**
 * Created by yanmeng on 2017/8/5.
 */
import * as React from "react";
import * as classnames from 'classnames';
import {TIME} from '../../module/config';
import './index.scss';

interface CountDownProps {
  defaultTip?: string | '获取短信验证码',
  countDownTip?: string | '重新获取',
  isNeedValidatePhone?: boolean | false,
  phone?: string | '',
  waitTime?: number,
  countDownTime?: number
}

interface CountDownState {
  pending: boolean,
  disabled: boolean
}

export default class CountDown extends React.Component<CountDownProps, CountDownState> {
  constructor(props: CountDownProps) {
    super(props);
    this.state = {
      pending: false,
      disabled: false
    };
  }

  public handleClick(): void {
    const {pending, disabled} = this.state;
    if(pending || disabled) return;
  }

  public render() {
    const {pending, disabled} = this.state;

    const {defaultTip} = this.props;

    const countDownClassNames:any = classnames({
      'count-down-wrapper': true,
      'pending': pending,
      'disabled': disabled
    });
    console.log('TIME',TIME);
    return (
      <div className={countDownClassNames} onClick={() => this.handleClick()}>
        {defaultTip}
      </div>
    );
  }
}
