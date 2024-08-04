import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const buildingRouter = Router();

buildingRouter.get(
  "/buildings/race/:raceId",
  async (req: Request, res: Response) => {
    await prisma.building
      .findMany({
        where: {
          race: {
            name: req.params.raceId,
          },
        },
      })
      .catch((error) => res.status(400).json(error))
      .then((cards) => res.status(200).json(cards));
  }
);

buildingRouter.get(
  "/building/:buildingId",
  async (req: Request, res: Response) => {
    await prisma.building
      .findMany({
        where: {
          id: parseInt(req.params.buildingId),
        },
        include: {
          unit: true,
        },
      })
      .catch((error) => res.status(400).json(error))
      .then((cards) => res.status(200).json(cards));
  }
);
