import { ItemObtainability, PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const itemRouter = Router();

itemRouter.get("/items", async (req: Request, res: Response) => {
  await prisma.item
    .findMany()
    .catch((error) => res.status(400).json(error))
    .then((items) => res.status(200).json(items));
});

itemRouter.get(
  "/items/obtainability/:obtainability",
  async (req: Request, res: Response) => {
    await prisma.item
      .findMany({
        where: {
          /// This is probably hacky way to do this , but it works.
          obtainability: (req.params.obtainability.charAt(0).toUpperCase() +
            req.params.obtainability.slice(1)) as ItemObtainability,
        },
      })
      .catch((error) => res.status(400).json(error))
      .then((items) => res.status(200).json(items));
  }
);

itemRouter.get("/items/race/:raceId", async (req: Request, res: Response) => {
  if (req.params.raceId === "neutral") {
    await prisma.item
      .findMany({
        where: {
          race: {
            none: {},
          },
          AND: {
            obtainability: ItemObtainability.Shop,
          },
        },
      })
      .catch((error) => res.status(400).json(error))
      .then((items) => res.status(200).json(items));
  } else
    await prisma.item
      .findMany({
        where: {
          race: {
            some: {
              id: parseInt(req.params.raceId),
            },
          },
        },
      })
      .catch((error) => res.status(400).json(error))
      .then((items) => res.status(200).json(items));
});

itemRouter.get(
  "/items/creep/:creepLevel",
  async (req: Request, res: Response) => {
    await prisma.item
      .findMany({
        where: {
          creep: {
            some: {
              level: parseInt(req.params.creepLevel),
            },
          },
        },
      })
      .catch((error) => res.status(400).json(error))
      .then((items) => {
        if (Object.keys(items).length <= 0) res.status(200).json(items);
        else res.status(404).send("No data found.");
      });
  }
);
