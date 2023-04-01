import { rest } from "msw";

export const authHandlers = [
  rest.get("/auth/login", (req, res, ctx) => {
    return res(
      ctx.json({
        hello: "login",
      })
    );
  }),
];
