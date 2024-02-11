import { AttackType, PrismaClient, UnitType } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main() {
  await prisma.card.create({
    data: {
      name: "Cripple",
      description:
        "Jednotka na niž byla použita tato karta nemůže útočit na 3 kola",
      icon: "cards/BTNCripple.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Undead",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Destroy",
      description: "Zničí důl/strom nebo ubere 2 životy budově",
      icon: "cards/BTNDestroy.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Undead",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Dispell",
      description: "Spálí vybranému protihráči 2 karty",
      icon: "cards/BTNDispell.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Human",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Eat",
      description:
        "Sežere vybranou jednotku (jednotka musí být na dosah vaší jednotky se kterou použijete Eat, platí i na air)",
      icon: "cards/BTNEat.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Orc",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Ensnare",
      description:
        "Zasíťuje jednotku která se nemůže hýbat do konce hry nebo do použití dispellu ( Negativní efekt )",
      icon: "cards/BTNEnsnare.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Orc",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Fairy Fire",
      description: "Na 1 kolo přidá všem vašim jednotkám +1 damage",
      icon: "cards/BTNFairyFire.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Night Elf",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Gold Wood",
      description: "Přidá +5 gold a +5 wood",
      icon: "cards/BTNGoldWood.webp",
      times_in_deck: 2,
      race: {
        connect: (await prisma.race.findMany()).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Invisible",
      description:
        "Zneviditelní jednotku na 3 kola , invisible lze zrušit také útokem",
      icon: "cards/BTNInvisible.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Human",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Markmanship",
      description: "Zvýší dostřel 3 vašich jednotek na 1 kolo o 1",
      icon: "cards/BTNMarksmanship.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Night Elf",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Militia",
      description: "Všichni vaši delníci získají +2 utok a +2 hp na 2 kola",
      icon: "cards/BTNMilitia.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Human",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Moon Glaive",
      description:
        "Útok jedné vaší jednotky se odráží na 2 další jednotky na stejném poli na kterém útočí na jednotku po dobu jednoho kola.",
      icon: "cards/BTNMoonGlaive.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Night Elf",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Move",
      description:
        "Všechny vaše jednotky získají po dobu jednoho kola +1 pohyb",
      icon: "cards/BTNMove.webp",
      times_in_deck: 2,
      race: {
        connect: (await prisma.race.findMany()).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Net",
      description:
        "Zasíťuje jednotku která se po použití nemůže hýbat ani útočit.",
      icon: "cards/BTNNet.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Undead",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Pillage",
      description:
        "Na 3 kola každý útok na nepřátelskou budovu vygeneruje 1 gold a 1 wood (v podstatě počet útoků * 1. damage udělený je irelevantní)",
      icon: "cards/BTNPillage.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Orc",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Polymorph",
      description:
        "Přemění jednotku na ovečku (nelze dispellovat === zmizí ze hry)",
      icon: "cards/BTNPolymorph.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Human",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Renewal",
      description: "Přidá +2 zlata",
      icon: "cards/BTNRenewal.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Night Elf",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Small Teleport",
      description:
        "Teleportuje jednotku na jakoukoliv neutrální budovu na mapě.",
      icon: "cards/BTNSmallTeleport.webp",
      times_in_deck: 2,
      race: {
        connect: (await prisma.race.findMany()).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Teleport",
      description:
        "Umožní teleportovat všechny vaše jednotky na vaši hlavní budovu (lze si vybrat jaké)",
      icon: "cards/BTNTeleport.webp",
      times_in_deck: 2,
      race: {
        connect: (await prisma.race.findMany()).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Spear",
      description:
        "Hodí šíp na jednotku která je otrávená a dostává 1dmg za kolo dokud nezemře (Negativní efekt)",
      icon: "cards/BTNSpear.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Orc",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.card.create({
    data: {
      name: "Summon Build",
      description:
        "Vytvoří jakoukoliv undead budovu poblíž jakékoliv vaší jednotky zdarma. Budova se staví podle klasických pravidel.",
      icon: "cards/BTNSummonBuild.webp",
      times_in_deck: 2,
      race: {
        connect: (
          await prisma.race.findMany({
            where: {
              name: "Undead",
            },
          })
        ).map((c) => ({ id: c.id })),
      },
    },
  });
}
