import { PrismaClient } from "@prisma/client";
import prisma from "./client";

export default async function main() {
  await prisma.map.createMany({
    data: [
      {
        name: "Ogre Hill",
        image: "board/Ogre Hill 1v1.webp",
        team_count: 1,
      },
      {
        name: "Murlock Tunnels",
        image: "board/Murlock Tunnels 1v1 CMPLTD.webp",
        team_count: 1,
      },
      {
        name: "Spring Chaos",
        image: "board/SpringChaos 1V1 CMPLTDV2.webp",
        team_count: 1,
      },
      {
        name: "Werewolf Trail",
        image: "board/Werewolf Trail 1v1 CMPLTD.webp",
        team_count: 1,
      },
      {
        name: "Rune War",
        image: "board/Rune War 1v1 CMPLTD.webp",
        team_count: 1,
      },
      {
        name: "Ancient Gardens",
        image: "board/Ancient Garden 2V2 CMPLTD.webp",
        team_count: 2,
      },
      {
        name: "Turtle Rocks",
        image: "board/Turtle Rock 2V2 CMPLTD.webp",
        team_count: 2,
      },
      {
        name: "Canyon",
        image: "board/Canyon 2V2 CMPLTD.webp",
        team_count: 2,
      },
      {
        name: "Sorceress Palace",
        image: "board/Sorcress palace 2V2 CMPLTDv2.webp",
        team_count: 2,
      },
      {
        name: "Love Maze",
        image: "board/Love Maze 2V2 CMPLTD.webp",
        team_count: 2,
      },
      {
        name: "Witchwood Lake",
        image: "board/Love Maze 2V2 CMPLTD",
        team_count: 3,
      },
      {
        name: "Isle of Paradise",
        image: "board/Isles of paradise 3v3 cmpltd.webp",
        team_count: 3,
      },
      {
        name: "Plague City",
        image: "board/Plague City 3v3 CMPLTD.webp",
        team_count: 3,
      },
      {
        name: "Jack'o'Lantern",
        image: "board/Jack o Lantern  3v3.webp",
        team_count: 3,
      },
      {
        name: "Graveyard",
        image: "board/Graveyard 3v3 cmpltd.webp",
        team_count: 3,
      },
      {
        name: "Session",
        image: "board/Session 4v4 CMPLTD2 .webp",
        team_count: 4,
      },
      {
        name: "Black Market",
        image: "board/Blackmarket 4v4 CMPLTD.webp",
        team_count: 4,
      },
      {
        name: "Lordaeron Mines",
        image: "board/Lordeon Mines 4v4 CMPLTD.webp",
        team_count: 4,
      },
      {
        name: "Friends",
        image: "board/Friends 4v4 CMPLTD.webp",
        team_count: 4,
      },
      {
        name: "Christmass Dinner",
        image: "board/Christmas Dinner 4v4 CMPLTDv2.webp",
        team_count: 4,
      },
    ],
  });
}
