import { rest } from "msw";
import { checkApiRequestValidation } from "shared/utilities/const";
import { res200, res500, res201 } from "./mockingResponses/responses";

export const handlers = [
  rest.get("http://localhost:3000/api/v1/survey", (req, res, ctx) => {
    const isValidate = checkApiRequestValidation("GET", req);

    if (isValidate) {
      return res(ctx.status(200), ctx.json(res200));
    } else {
      return res(ctx.status(500), ctx.json(res500));
    }
  }),

  rest.post(
    "http://localhost:3000/api/v1/survey/:id/answers",
    (req, res, ctx) => {
      const isValidate = checkApiRequestValidation("POST", req);
      if (isValidate) {
        const { answers } = req.body?.data?.attributes;
        return res(
          ctx.status(201),
          ctx.json({
            data: {
              type: "surveyAnswers",
              id: "9c7160a4-e9ad-499e-92f6-07d7cdb0382c",
              attributes: {
                answers,
              },
              relationships: {
                survey: {
                  data: {
                    type: "surveys",
                    id: req.params.id,
                  },
                },
              },
            },
          })
        );
      } else {
        return res(ctx.status(500), ctx.json(res500));
      }
    }
  ),
];
