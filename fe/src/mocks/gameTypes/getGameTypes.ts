import { rest } from 'msw';

export const getGameTypes = rest.get(
  '/operator/type/operator2',
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(['GameType1', 'GameType2', 'GameType3']),
    );
  },
);
