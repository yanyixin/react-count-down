export interface CountDownState {
  pending: boolean,
  disabled: boolean,
  buttonContent: string,
  buttonDefaultContent: string,
  count: number
}

export interface responseData {
  data: Object,
  status: number,
  message: string
}