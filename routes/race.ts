import { PrismaClient } from "@prisma/client";
import express, { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const raceRouter = Router();

raceRouter.get("/races", async (request: Request, response: Response) => {
  await prisma.race
    .findMany({
      include: {
        ability: true,
      },
    })
    .catch((error: Error) => response.status(400).json(error))
    .then((races) => {
      if (Object.keys(races).length <= 0) {
        response.status(404).send("No records found");
      } else response.status(200).json(races);
    });
});

raceRouter.get(
  "/race/:raceName",
  async (request: Request, response: Response) => {
    await prisma.race
      .findFirst({
        where: {
          name: request.params.raceName,
        },
        include: {
          ability: true,
        },
      })
      .catch((error: Error) => response.status(404).json(error))
      .then((race) => {
        if (!race) {
          response
            .status(404)
            .send(`Race with ID: ${request.params.raceId} was not found`);
        } else response.status(200).json(race);
      });
  }
);
