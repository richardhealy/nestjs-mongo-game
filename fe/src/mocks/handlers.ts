import { rest } from 'msw';

export const handlers = [
  rest.get('/operator', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(['Operator1', 'Operator2', 'Operator3']),
    );
  }),
];
