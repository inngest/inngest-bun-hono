import { inngest } from './client';

export const helloWorld = inngest.createFunction(
  { id: 'hello-world' },
  { event: 'demo/event.sent' },
  async ({ event, step, env }) => {
    console.log('Event: ', event.data);

    const result = await step.run('test', () => {
      return {
        message: 'Hello World',
        encrypted: {
          message: 'Hello World',
        },
      };
    });

    console.log(result);

    // Use "env" to access the Cloudflare Workers environment variables
    // (e.g. env.TEST_ENV_VAR)
    // This is passed using the bindingsMiddleware in middleware.ts
    return {
      message: `Hello ${event.name}!`,
    };
  }
);
