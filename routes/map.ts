import { PrismaClient } from "@prisma/client";
import express, { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const mapRouter = Router();

mapRouter.get("/maps", async (req: Request, res: Response) => {
  await prisma.map
    .findMany()
    .catch((error) => res.status(400).json(error))
    .then((maps) => res.status(200).json(maps));
});

mapRouter.get("/map/:mapId", async (req: Request, res: Response) => {
  await prisma.map
    .findFirst({ where: { id: parseInt(req.params.mapId) } })
    .catch((error) => res.status(400).json(error))
    .then((map) => res.status(200).json(map));
});

///Probably useless route too..
mapRouter.get("/maps/size/:teamSize", async (req: Request, res: Response) => {
  await prisma.map
    .findMany({
      where: {
        team_count: parseInt(req.params.teamSize),
      },
    })
    .catch((error) => res.status(400).json(error))
    .then((maps) => res.status(200).json(maps));
});
