import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const cardRouter = Router();

cardRouter.get("/cards", async (req: Request, res: Response) => {
  await prisma.card
    .findMany()
    .catch((error) => res.status(400).json(error))
    .then((cards) => res.status(200).json(cards));
});

cardRouter.get(
  "/cards/race/:raceId",
  async (request: Request, response: Response) => {
    await prisma.card
      .findMany({
        where: {
          race: {
            some: {
              name: request.params.raceId,
            },
          },
        },
      })
      .catch((error) => response.status(400).json(error))
      .then((cards) => response.status(200).json(cards));
  }
);
