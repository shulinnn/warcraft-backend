import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const unitRouter = Router();

unitRouter.get("/units/:raceId", async (req: Request, res: Response) => {
  await prisma.unit
    .findMany({
      where: {
        race: {
          id: parseInt(req.params.raceId),
        },
      },
    })
    .catch((error) => res.status(400).json(error))
    .then((maps) => res.status(200).json(maps));
});

unitRouter.get("/unit/:unitId", async (req: Request, res: Response) => {
  await prisma.unit
    .findFirst({
      where: {
        id: parseInt(req.params.unitId),
      },
      include: {
        ability: true,
        building: true,
      },
    })
    .catch((error) => res.status(400).json(error))
    .then((maps) => res.status(200).json(maps));
});
