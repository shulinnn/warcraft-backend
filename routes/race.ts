import { PrismaClient } from "@prisma/client";
import express, { Request, Response, Router } from "express";

const prisma = new PrismaClient();
export const raceRouter = Router();

raceRouter.get("/races", async (request: Request, response: Response) => {
  try {
    const {
      id, // Can now be a query parameter
      name,
      includeAbility,
      includeHeroes,
      includeItems,
      includeCards,
      fields,
    } = request.query;

    // Parse fields from query parameter
    const fieldList = fields ? (fields as string).split(",") : [];
    const selectFields: Record<string, boolean | object> = {};

    // Dynamically add fields
    fieldList.forEach((field) => {
      selectFields[field] = true;
    });

    // Ensure race data is always included
    selectFields.id = true; // Always include the id
    selectFields.name = true; // Always include the name
    selectFields.icon = true; // Always include the icon (you can add other fields here)

    // Add ability field if includeAbility is "true"
    if (includeAbility === "true") {
      selectFields.Ability = {
        select: {
          id: true,
          name: true,
          description: true,
          icon: true,
        },
      };
    }

    // Add nested includes if requested
    if (includeHeroes === "true") {
      selectFields.hero = { select: { id: true, name: true } };
    }
    if (includeItems === "true") {
      selectFields.item = { select: { id: true, name: true } };
    }
    if (includeCards === "true") {
      selectFields.card = { select: { id: true, name: true } };
    }

    // Construct the where clause dynamically based on filters
    const whereClause: Record<string, any> = {};

    // Add filters for race attributes (id, name, etc.)
    if (id) {
      whereClause.id = parseInt(id as string);
    }
    if (name) {
      whereClause.name = {
        contains: name as string,
        mode: "insensitive", // Case-insensitive search
      };
    }

    // Prisma query to get races based on dynamic filters
    const races = await prisma.race.findMany({
      where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
      select: selectFields, // Apply the dynamic select
    });

    // Handle the response
    if (!races || races.length === 0) {
      response.status(404).send("No records found");
    } else {
      response.status(200).json(races);
    }
  } catch (error: any) {
    response.status(400).json({ error: error.message });
  }
});

raceRouter.get('/race/:raceString', async (request: Request, response: Response) => {
  try {
    const { raceString } = request.params;

    // Prisma query to find a race by its string identifier (e.g., name or slug)
    const race = await prisma.race.findFirst({
      where: {
        OR: [
          { name: { equals: raceString, mode: "insensitive" } }, // Case-insensitive match by name
        ],
      },
      include: {
        Ability: true, // Include related abilities
      },
    });

    // Handle the response
    if (!race) {
      response.status(404).send("Race not found");
    } else {
      response.status(200).json(race);
    }
  } catch (error: any) {
    response.status(400).json({ error: error.message });
  }
});
