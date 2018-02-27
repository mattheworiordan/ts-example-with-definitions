import { Realtime, Types } from './ably';

let options = new Types.ClientOptions({ key: 'firstKey' });
options.queryTime = false;

let realtime = new Realtime(options);
console.log("First", realtime.getClientOptions());


import * as Ably from './ably';

let ably = new Ably.Realtime({ key: 'foo '});
console.log("2", ably.getClientOptions());
let opt = new Ably.Types.ClientOptions();
opt.queryTime = true;
ably = new Ably.Realtime(opt);
console.log("3", ably.getClientOptions());

/*

let ablyRealtime  = new Ably.Realtime({ clientId: 'firstClientId' });
let ablyOptions = new Ably.Types.ClientOptions();
ablyOptions.key = 'secondKey';
console.log("Second", ablyRealtime.getClientOptions());

*/