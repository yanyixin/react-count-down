/**
 * Created by yanmeng on 2017/8/6.
 */
export interface IndexInterfaceState {
  defaultTip?: string,
  countDownTip?: string,
  isNeedValidatePhone?: boolean,
  phone: string,
  waitTime?: number,
  countDownTime?: number
  getSmsFunc?: any
}