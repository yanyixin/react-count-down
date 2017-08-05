/**
 * Created by yanmeng on 2017/8/5.
 */
import {TIME_TYPE} from './type';

export const TIME = {
  WAIT_TIME : 60,
  COUNT_DOWN_TIME : 1000
};

export const RULES = {
  PHONE: /^1[3-9]\d{9}$/
};

export const TEXT = {
  COUNT_DOWN_DEFAULT_CONTENT: '获取短信验证码',
  COUNT_DOWN_TIP: '重新获取',
  COUNT_DOWN_PENDING: '发送中...'
};

export const ERROR_CODE = {
  PHONE_EMPTY: '手机号不能为空',
  PHONE_ERROR: '请输入正确格式的手机号'
};