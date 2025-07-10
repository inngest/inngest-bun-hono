import { Inngest } from 'inngest';
import { bindingsMiddleware } from './middleware';
import { schemas } from './types';

import { encryptionMiddleware } from '@inngest/middleware-encryption';

const mw = encryptionMiddleware({
  key: 'xyz',
});

export const inngest = new Inngest({
  id: 'my-hono-app',
  schemas,
  middleware: [bindingsMiddleware, mw],
});
