import * as Ably from './ably';

let ablyInlineOpts = new Ably.Realtime({ queryTime: true, key: 'foo' });

let opts: Ably.Types.ClientOptions = { queryTime: true };
opts.key = 'foo';
let ably = new Ably.Realtime(opts);