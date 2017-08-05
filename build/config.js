/**
 * Created by yanmeng on 2017/8/5.
 */
import ip from "ip";

let localIP = ip.address(),
    port = '8081',
    localAddress = `http://${localIP}:${port}`,
    workingDir = process.cwd();

export {
  localAddress,
  localIP,
  port,
  workingDir
}