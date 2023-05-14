import { rest } from 'msw';

export const getSlateNames = rest.get(
  'operator/operator2/gametype2',
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(['Slate1', 'Slate2', 'Slate3']));
  },
);
