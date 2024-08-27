import { PrismaClient } from "@prisma/client";
import prisma from "./client";

///NE

export default async function main() {
  await prisma.building.create({
    data: {
      name: "Ancient of Lore",
      icon: "buildings/Ancientoflore.webp",
      priceGold: 1,
      priceWood: 2,
      description:
        "Budova ve které můžete stavět anti-air jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Ancient of War",
      icon: "buildings/Ancientofwar.webp",
      priceGold: 1,
      priceWood: 1,
      description:
        "Budova ve které můžete stavět pozemní jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Ancient of Wonder",
      icon: "buildings/Ancientofwonder.webp",
      priceGold: 1,
      priceWood: 3,
      description: "Budova ve které můžete kupovat předměty pro hrdiny.",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Ancient Protector",
      icon: "buildings/Ancientprotector.webp",
      priceGold: 3,
      priceWood: 3,
      description: "Věž. Dostřel 3, damage 2",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Hunter's hall",
      icon: "buildings/Hunters_Hall.webp",
      priceGold: 1,
      priceWood: 3,
      description: "Budova ve které můžete kupovat upgrady.",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Chimaera Roost",
      icon: "buildings/Chimaera_Roost.webp",
      priceGold: 2,
      priceWood: 2,
      description:
        "Budova ve které můžete stavět air jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Moon well",
      icon: "buildings/Moonwell.webp",
      priceGold: 1,
      priceWood: 1,
      description:
        "Speciální budova která může jednout ohealovat jakoukoliv jednotku která je poblíž - 1 použití (na maximální počet životů, healuje ally i vlastní)",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Tree of Life (level 1)",
      icon: "buildings/TreeoflifeTECH1.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 5g 5w",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Tree of Life (level 2)",
      icon: "buildings/TreeofagesTECH2.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 5g 5w",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Tree of Life (level 3)",
      icon: "buildings/TECH3.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 1g 1w",
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  ///HU

  await prisma.building.create({
    data: {
      name: "Arcane Sanctum",
      icon: "buildings/Arcane_Sanctum.webp",
      priceGold: 1,
      priceWood: 2,
      description:
        "Budova ve které můžete stavět anti-air jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Military Barracks",
      icon: "buildings/HumBarracks.webp",
      priceGold: 1,
      priceWood: 1,
      description:
        "Budova ve které můžete stavět pozemní jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Gryphon Aviary",
      icon: "buildings/Gryphon_Aviary.webp",
      priceGold: 1,
      priceWood: 3,
      description:
        "Budova ve které můžete stavět air jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Scout Tower",
      icon: "buildings/Scout_Tower.webp",
      priceGold: 3,
      priceWood: 3,
      description: "Věž. Dostřel 3, damage 2",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Arcane Vault",
      icon: "buildings/Arcane_Vault.webp",
      priceGold: 1,
      priceWood: 3,
      description: "Budova ve které můžete kupovat předměty pro hrdiny.",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Blacksmith",
      icon: "buildings/Blacksmith.webp",
      priceGold: 1,
      priceWood: 3,
      description: "Budova ve které můžete kupovat upgrady.",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Farm",
      icon: "buildings/Farm.webp",
      priceGold: 1,
      priceWood: 1,
      description: "Speciální budova která může zablokovat průchodnost pole",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Town hall (level 1)",
      icon: "buildings/Townhall-redTECH1.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 5g 5w",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Keep (level 2)",
      icon: "buildings/Keep-redTECH2.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 5g 5w",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Castle (level 3)",
      icon: "buildings/Castle-redTECH3.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova.",
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  ///ORC

  await prisma.building.create({
    data: {
      name: "Spirit Lodge",
      icon: "buildings/Spirit_Lodge.webp",
      priceGold: 1,
      priceWood: 2,
      description:
        "Budova ve které můžete stavět anti-air jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Barracks",
      icon: "buildings/Barracks.webp",
      priceGold: 1,
      priceWood: 1,
      description:
        "Budova ve které můžete stavět pozemní jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Beastiary",
      icon: "buildings/Beastiary.webp",
      priceGold: 2,
      priceWood: 2,
      description:
        "Budova ve které můžete stavět air jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Watch Tower",
      icon: "buildings/Watch_Tower.webp",
      priceGold: 3,
      priceWood: 3,
      description: "Věž. Dostřel 3, damage 2",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Voodoo Lounge",
      icon: "buildings/Voodoo_Lounge.webp",
      priceGold: 1,
      priceWood: 3,
      description: "Budova ve které můžete kupovat předměty pro hrdiny.",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "War Mill",
      icon: "buildings/War_Mill.webp",
      priceGold: 1,
      priceWood: 3,
      description: "Budova ve které můžete kupovat upgrady.",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Orc Burrow",
      icon: "buildings/Orcburrow.webp",
      priceGold: 1,
      priceWood: 1,
      description: "Speciální budova do které se můžou schovat peónové.",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Great hall (level 1)",
      icon: "buildings/Great_Hall.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 5g 5w",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Stronghold (level 2)",
      icon: "buildings/StrongholdTECH2.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 5g 5w",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Fortress (level 3)",
      icon: "buildings/FortressTECH3.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 1g 1w",
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  ///undead

  await prisma.building.create({
    data: {
      name: "Temple of the Damned",
      icon: "buildings/Templeofthedamned.webp",
      priceGold: 1,
      priceWood: 2,
      description:
        "Budova ve které můžete stavět anti-air jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Crypt",
      icon: "buildings/Crypt.webp",
      priceGold: 1,
      priceWood: 1,
      description:
        "Budova ve které můžete stavět pozemní jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Boneyard",
      icon: "buildings/Boneyard.webp",
      priceGold: 1,
      priceWood: 3,
      description:
        "Budova ve které můžete stavět air jednotky. Každá jednotka stojí stejně jako budova.",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Spirit Tower",
      icon: "buildings/Spirit_TowerTOWER.webp",
      priceGold: 3,
      priceWood: 3,
      description: "Věž. Dostřel 3, damage 2",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Tomb of Relice",
      icon: "buildings/Tomb_of_Relics.webp",
      priceGold: 1,
      priceWood: 3,
      description: "Budova ve které můžete kupovat předměty pro hrdiny.",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Graveyard",
      icon: "buildings/Graveyard.webp",
      priceGold: 1,
      priceWood: 3,
      description: "Budova ve které můžete kupovat upgrady.",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Nerubian Tower",
      icon: "buildings/Nerubian_Tower FARMA.webp",
      priceGold: 1,
      priceWood: 1,
      description: "Speciální budova která je v podstatě levnejší věž.",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Necropolis (level 1)",
      icon: "buildings/NecropolisTECH1.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 5g 5w",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Hall of the Dead (level 2)",
      icon: "buildings/Halls_of_the_DeadTECH2.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova. Cena vylepšení na další úrověň je 5g 5w",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.building.create({
    data: {
      name: "Black Citadel (level 3)",
      icon: "buildings/Black_CitadelTECH3.webp",
      priceGold: 2,
      priceWood: 2,
      description: "Hlavní budova.",
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });
}
