import { Hono } from 'hono';
import { serve } from 'inngest/hono';
import { type Bindings } from './bindings';
import { functions, inngest } from './inngest';

const app = new Hono<{ Bindings: Bindings }>();

app.on(
  ['GET', 'PUT', 'POST'],
  '/api/inngest',
  serve({
    client: inngest,
    functions,
  })
);

console.log('startup!');

await inngest.send([
  {
    name: 'demo/event.sent',
    data: {
      message: 'Event body',
      encrypted: {
        message: 'Encrypted message',
      },
    },
  },
  {
    name: 'demo/event.sent',
    data: {
      message: 'message 2',
      encrypted: {
        message: 'Encrypted message 2',
      },
    },
  },
]);

export default app;
