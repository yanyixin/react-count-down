/**
 * Created by yanmeng on 2017/8/5.
 */
import * as $Promise from 'bluebird';

export default function PromiseFunc(url: string): any {
  return new $Promise<string>((resolve: any, reject: any) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = handler;
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();

    function handler() {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
  });
}
