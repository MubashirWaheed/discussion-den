import { rest } from "msw";

export const dashboardHanlder = [
  rest.get("/app/dashboard", (req, res, ctx) => {
    return res(
      ctx.json({
        hello: "json",
      })
    );
  }),
];
