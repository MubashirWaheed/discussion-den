import { rest } from "msw";

export const authHandlers = [
  rest.get("/app", (req, res, ctx) => {
    return res(
      ctx.json({
        hello: "working",
      })
    );
  }),
];
