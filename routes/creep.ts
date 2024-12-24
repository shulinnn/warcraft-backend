import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const creepRouter = Router();

creepRouter.get("/creeps", async (req: Request, response: Response) => {
  await prisma.creep
    .findMany()
    .catch((error) => response.status(400).json(error))
    .then((creeps) => {
      if (Object.keys(creeps).length <= 0) {
        response.status(404).send("No records found");
      } else response.status(200).json(creeps);
    });
});

creepRouter.get("/creep/:creepId", async (req: Request, response: Response) => {
  await prisma.creep
    .findFirst({
      where: {
        id: parseInt(req.params.creepId),
      },
      include: {
        item: true,
        map: true,
      },
    })
    .catch((error) => response.status(400).json(error))
    .then((creep) => {
      if (!creep) {
        response.status(404).send("No records found");
      } else response.status(200).json(creep);
    });
});
