import { rest } from "msw";
import { res200, res500 } from "./mockingResponses/responses";

export const handlers = [
  rest.get("http://localhost:3000/api/v1/survey", (req, res, ctx) => {
    if (!req.headers || !req.method) {
      return res(ctx.status(500), ctx.json(res500));
    } else {
      return res(ctx.status(200), ctx.json(res200));
    }
  }),
];
