import prisma from "./client";

export default async function main() {
  await prisma.race.create({
    data: {
      name: "Human",
      icon: "race/icons/240px-Humanrace.png",
      background_image : "race/backgrounds/human_bg.jpg",
      button_background_color: "#214D74",
      background_color : "#1E2F42",
      ability: {
        create: {
          name: "Dispell",
          icon: "race/spells/BTNDispelMagic.webp",
          description:
            "Ruší určité negativní efekty.",
        },
      },
    },
  });

  await prisma.race.create({
    data: {
      name: "Night Elf",
      icon: "race/icons/240px-Nelfrace.png",
      background_image : "race/backgrounds/nightElf_bg.jpg",
      button_background_color: "#226917",
      background_color : "#235A45",
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
      background_image : "race/backgrounds/orc_bg.jpg",
      button_background_color: "#742F21",
      background_color : "#4D2822",
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
      background_image : "race/backgrounds/undead_bg.jpg",
      button_background_color: "#4D2822",
      background_color : "#2C2A42",
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
