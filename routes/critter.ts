import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const critterRouter = Router();

critterRouter.get("/critters", async (req: Request, response: Response) => {
    await prisma.passiveMob
        .findMany({
            include: {
                ability: true
            }
        })
        .catch((error) => response.status(400).json(error))
        .then((creeps) => {
            if (Object.keys(creeps).length <= 0) {
                response.status(404).send("No records found");
            } else response.status(200).json(creeps);
        });
});