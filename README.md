
## 开始
- 把项目 `clone` 到本地
- 安装依赖包 `npm install`
- 启动项目 `npm start`
- 打开网页 `http://localhost:8081/index.html`

## 接收的参数

```
interface CountDownProps {
  defaultTip?: string, // 按钮显示的文本，选传，默认为 "获取短信验证码"
  countDownTip?: string, // 倒计时的提示，选传，默认为 "重新获取"
  isNeedValidatePhone: boolean, // 是否需要验证手机号，选传，默认为 false
  phone: string, // 手机号，必传，发送短信验证码会用到
  waitTime?: number, // 需要等待的时间，选传，默认为 60
  countDownTime?: number, // 倒计时的间隔时间，选传，默认为 1
  getSmsFunc: any // 
}
```

## 使用方法

在页面中引入组件：
```
import CountDown from 'Components/CountDown';

```
给组件传递参数：
```
<CountDown
  defaultTip={defaultTip}
  countDownTip={countDownTip}
  isNeedValidatePhone={isNeedValidatePhone}
  phone={phone}
  waitTime={10}
  getSmsFunc={() => this.getSmsHandler()}
/>
```
## 功能
- 在 `isNeedValidatePhone` 为 `true` 的情况下，检测手机号是否为空
- 在 `isNeedValidatePhone` 为 `true` 的情况下，检测手机号是否符合规则
- 发送获取短信验证码的请求
- 发送请求期间按钮为 `pending` 状态
- 如果发送请求成功，则开始倒计时，按钮为 `disabled` 状态
- 如果请求错误，恢复按钮的可点击状态
 

