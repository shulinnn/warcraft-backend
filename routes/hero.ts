import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const heroRouter = Router();

///Probably completely useless route -> might delete later
heroRouter.get("/heroes", async (req: Request, response: Response) => {
  await prisma.hero
    .findMany()
    .catch((error) => response.status(400).json(error))
    .then((heroes) => {
      if (Object.keys(heroes).length <= 0) {
        response.status(404).send("No records found");
      } else response.status(200).json(heroes);
    });
});

heroRouter.get(
  "/heroes/race/:raceName",
  async (request: Request, response: Response) => {
    if (request.params.raceName === "neutral") {
      await prisma.hero
        .findMany({
          where: {
            raceId: null,
          },
        })
        .catch((error) => response.status(400).json(error))
        .then((heroes) => {
          if (Object.keys(heroes).length <= 0) {
            response.status(404).send(`No neutral heroes were found`);
          } else {
            response.status(200).json(heroes);
          }
        });
    } else
      await prisma.hero
        .findMany({
          where: {
            race: {
              name: request.params.raceName
            }
          },
        })
        .catch((error) => response.status(400).json(error))
        .then((heroes) => {
          if (Object.keys(heroes).length <= 0) {
            response
              .status(404)
              .send(
                `No heroes with raceId : ${request.params.raceId} were not found`
              );
          } else {
            response.status(200).json(heroes);
          }
        });
  }
);

heroRouter.get(
  "/hero/:heroId",
  async (request: Request, response: Response) => {
    await prisma.hero
      .findUnique({
        where: {
          id: parseInt(request.params.heroId),
        },
        include: {
          ability: true,
        },
      })
      .catch((error) => response.status(400).json(error))
      .then((hero) => {
        if (!hero) {
          response
            .status(404)
            .send(
              `No hero with heroId: ${request.params.heroId} was not found`
            );
        } else {
          response.status(200).json(hero);
        }
      });
  }
);
