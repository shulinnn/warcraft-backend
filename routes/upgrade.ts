import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const upgradeRouter = Router();

upgradeRouter.get(
  "/upgrades/race/:raceId",
  async (req: Request, res: Response) => {
    await prisma.upgrade
      .findMany({
        where: {
          race: {
            name: req.params.raceId,
          },
        },
        include: {
          ability: true,
        },
      })
      .catch((error) => res.status(400).json(error))
      .then((cards) => res.status(200).json(cards));
  }
);
