import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main() {
  await prisma.race.create({
    data: {
      name: "Human",
      icon: "race/icons/240px-Humanrace.png",
      ability: {
        create: {
          name: "Dispell",
          icon: "race/spells/BTNDispelMagic.webp",
          description:
            "Ruší negativní efekty karet, schopnosti hrdinů a rasových schopností.",
        },
      },
    },
  });

  await prisma.race.create({
    data: {
      name: "Night Elf",
      icon: "race/icons/240px-Nelfrace.png",
      ability: {
        create: {
          icon: "race/spells/BTNUproot.webp",
          name: "Unroot",
          description:
            "Dovolí nočním elfům vykořenit jakoukoliv budovu , ztrácí 1/2 svých životů a získává + 1 pohyb a +1 útok (Nelze vykořenit a zakořenit v jednom kole.)",
        },
      },
    },
  });

  await prisma.race.create({
    data: {
      name: "Orc",
      icon: "race/icons/240px-Orcrace.png",
      ability: {
        create: {
          description:
            "Vybraný hrdina získá nezranitelnost na 1 kol a získá +2 hp.",
          name: "Undying Rage",
          icon: "race/spells/barrier.jpg",
        },
      },
    },
  });

  await prisma.race.create({
    data: {
      name: "Undead",
      icon: "race/icons/240px-Undeadrace.png",
      ability: {
        create: {
          description: "Hráč si může zničit vlastní budovu a získá její cenu.",
          name: "Sacrifice",
          icon: "race/spells/BTNSacrificialPit.webp",
        },
      },
    },
  });
}
