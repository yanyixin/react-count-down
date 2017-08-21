/**
 * Created by yanmeng on 2017/8/5.
 */

enum methodType {'GET','PUT','PATCH','DELETE','POST'};

export default function(method: string, url: string, data: any): any {
  return new Promise<string>((resolve: Function, reject: Function) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, true); // true 代表是否异步发送
    xhr.onreadystatechange = handler;
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

    function handler() {
      if(xhr.readyState == 4 && xhr.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
  });
}
