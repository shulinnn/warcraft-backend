import { AttackType, PrismaClient, UnitType } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main() {
  await prisma.unit.create({
    data: {
      name: "Worker",
      icon: "units/BTNPeasant.jpg",
      priceGold: 1,
      priceWood: 0,
      health: 3,
      damage: 1,
      tech: 1,
      race: {
        connect: {
          id: 1,
        },
      },
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Repair",
          description:
            "Dělník může opravovat budovy/katapulty o 1hp za 1dřevo jednou za kolo.",
          icon: "units/spells/BTNRepairOff.webp",
        },
      },
      building: {
        connect: (
          await prisma.building.findMany({
            where: {
              name: {
                in: [
                  "Town hall (level 1)",
                  "Keep (level 2)",
                  "Castle (level 3)",
                ],
              },
            },
          })
        ).map((e) => ({ id: e.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Militia",
      icon: "units/militia.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 5,
      race: {
        connect: {
          id: 1,
        },
      },
      damage: 2,
      tech: 1,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Military Barracks",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Footman",
      icon: "units/footman.jpg",
      priceGold: 1,
      priceWood: 1,
      race: {
        connect: {
          id: 1,
        },
      },
      health: 6,
      damage: 3,
      tech: 2,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Military Barracks",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Knight",
      icon: "units/knight.jpg",
      priceGold: 1,
      race: {
        connect: {
          id: 1,
        },
      },
      priceWood: 1,
      health: 8,
      damage: 4,
      tech: 3,
      attack_type: AttackType.Melee,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Horse Movement",
          description: "Knight se pohne o 1 pole navíc",
          icon: "units/spells/BTNAnimalWarTraining.webp",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Military Barracks",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Rifleman",
      icon: "units/rifleman.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 7,
      damage: 2,
      race: {
        connect: {
          id: 1,
        },
      },
      tech: 1,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Military Barracks",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Sorceress",
      icon: "units/sorcress.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 7,
      race: {
        connect: {
          id: 1,
        },
      },
      damage: 3,
      tech: 2,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Arcane Sanctum",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Priest",
      icon: "units/priest.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 7,
      damage: 3,
      tech: 3,
      race: {
        connect: {
          id: 1,
        },
      },
      attack_type: AttackType.All,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Heal",
          description: "Uzdraví jednotku o 1 život",
          icon: "units/spells/BTNHealOff.webp",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Arcane Sanctum",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Gyrocopter",
      icon: "units/helicopter.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 4,
      damage: 2,
      race: {
        connect: {
          id: 1,
        },
      },
      tech: 1,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Gryphon Aviary",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Dragonhawk rider",
      icon: "units/dragonhawk.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 6,
      damage: 3,
      tech: 2,
      race: {
        connect: {
          id: 1,
        },
      },
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Gryphon Aviary",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Gryphon rider",
      icon: "units/gryphon.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 8,
      damage: 4,
      tech: 3,
      race: {
        connect: {
          id: 1,
        },
      },
      attack_type: AttackType.All,
      special_unit: true,
      unit_type: UnitType.Air,
      ability: {
        create: {
          name: "AOE Damage",
          description:
            "Okolní jednotky při útoku gryfa utrpí 1 dmg. (na stejném poli)",
          icon: "units/spells/PASBTNStormHammer.webp",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Gryphon Aviary",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Spellbreaker",
      icon: "units/spellbreaker.webp",
      priceGold: 2,
      priceWood: 2,
      race: {
        connect: {
          id: 1,
        },
      },
      health: 6,
      damage: 2,
      tech: 0,
      attack_type: AttackType.All,
      special_unit: true,
      unit_type: UnitType.Air,
      ability: {
        create: {
          name: "Spell Steal",
          description:
            "Pokud máte negativní efekt na jednotce dispellujete ho a dá te na nepřátelskou.",
          icon: "units/spells/BTNSpellSteal.webp",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Arcane Vault",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Mortar team",
      icon: "units/mortarteam.webp",
      priceGold: 2,
      priceWood: 3,
      health: 7,
      damage: 3,
      race: {
        connect: {
          id: 1,
        },
      },
      tech: 0,
      range: 2,
      attack_type: AttackType.All,
      special_unit: true,
      unit_type: UnitType.Air,
      ability: {
        create: {
          name: "Spell Steal",
          description: "Aoe DMG za 1 hp (Passive )",
          icon: "units/spells/BTNIronAmmo.webp",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Arcane Vault",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Siege Engine",
      icon: "units/BTNSeigeEngine.webp",
      priceGold: 3,
      priceWood: 3,
      race: {
        connect: {
          id: 1,
        },
      },
      health: 3,
      damage: 3,
      tech: 0,
      range: 3,
      attack_type: AttackType.Melee,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Building destroyer",
          icon: "units/spells/BTNHumanMissileUpOne.webp",
          description: "Při útoku na budovu katapult udělí 2x svého damage.",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Blacksmith",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Peón",
      icon: "units/BTNPeon.jpg",
      priceGold: 1,
      priceWood: 0,
      health: 3,
      damage: 1,
      race: {
        connect: {
          id: 3,
        },
      },
      tech: 1,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Repair",
          description:
            "Dělník může opravovat budovy/katapulty o 1hp za 1dřevo jednou za kolo.",
          icon: "units/spells/BTNRepairOff.webp",
        },
      },
      building: {
        connect: (
          await prisma.building.findMany({
            where: {
              name: {
                in: [
                  "Great hall (level 1)",
                  "Stronghold (level 2)",
                  "Fortress (level 3)",
                ],
              },
            },
          })
        ).map((e) => ({ id: e.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Grunt",
      icon: "units/grunt.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 7,
      damage: 2,
      tech: 1,
      race: {
        connect: {
          id: 3,
        },
      },
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Barracks",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Raider",
      icon: "units/PREraider.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 7,
      damage: 3,
      tech: 2,
      race: {
        connect: {
          id: 3,
        },
      },
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Barracks",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Kodo",
      icon: "units/prekodo.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 8,
      damage: 4,
      race: {
        connect: {
          id: 3,
        },
      },
      tech: 3,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Barracks",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
  await prisma.unit.create({
    data: {
      name: "Tauren",
      icon: "units/tauren.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 8,
      damage: 5,
      race: {
        connect: {
          id: 3,
        },
      },
      tech: 4,
      attack_type: AttackType.Melee,
      special_unit: true,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Barracks",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
      ability: {
        create: {
          name: "AOE Damage",
          description:
            "Okolní jednotky při utoku taura utrpí 1 damage. (na stejnem poli)",
          icon: "units/spells/BTNSmash.webp",
        },
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Troll Headhunter",
      icon: "units/PreTroll.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 5,
      damage: 2,
      tech: 1,
      race: {
        connect: {
          id: 3,
        },
      },
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Spirit Lodge",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Troll berserker",
      icon: "units/Berserker.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 6,
      race: {
        connect: {
          id: 3,
        },
      },
      damage: 3,
      tech: 2,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Spirit Lodge",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Shaman",
      icon: "units/Shaman.jpg",
      priceGold: 1,
      race: {
        connect: {
          id: 3,
        },
      },
      priceWood: 2,
      health: 8,
      damage: 3,
      tech: 3,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Spirit Lodge",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
      ability: {
        create: {
          name: "Blood Rage",
          description:
            "Zvýší jednotce dle libosti damage o 1, lze stackovat od více shamanů a platí pouze na jedno kolo.",
          icon: "units/spells/BTNBloodLustOff.webp",
        },
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Bat rider",
      icon: "units/bat.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 5,
      race: {
        connect: {
          id: 3,
        },
      },
      damage: 2,
      tech: 1,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Beastiary",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Wyvern",
      icon: "units/vivern.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 7,
      race: {
        connect: {
          id: 3,
        },
      },
      damage: 3,
      tech: 2,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Beastiary",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
      ability: {
        create: {
          name: "Spear",
          description:
            "Wyverna může zdvojnásobit efekt karty oštěpu. Lze zaměřit 2 jednotky jednou kartou nebo jednu jednotku otravit za 2dmg/kolo",
          icon: "units/spells/PASBTNEnvenomedSpear",
        },
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Catapult",
      icon: "units/BTNCatapultOld.webp",
      priceGold: 3,
      priceWood: 3,
      health: 3,
      damage: 3,
      race: {
        connect: {
          id: 3,
        },
      },
      tech: 0,
      range: 3,
      attack_type: AttackType.Melee,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Building destroyer",
          icon: "units/spells/BTNHumanMissileUpOne.webp",
          description: "Při útoku na budovu katapult udělí 2x svého damage.",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "War Mill",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Witch Doctor",
      icon: "units/witchdoctor.webp",
      priceGold: 1,
      priceWood: 3,
      health: 5,
      race: {
        connect: {
          id: 3,
        },
      },
      damage: 2,
      tech: 0,
      attack_type: AttackType.All,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Healing totem",
          description:
            "Vytvoří healici totem pod sebou který trvá do jeho rozbití (má 1hp). Všechny jednotky na poli s totemem dostavaji +1HP za kolo.",
          icon: "units/spells/healingward.webp",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Voodoo Lounge",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Spirit Walker",
      icon: "units/spiritwalker.webp",
      priceGold: 1,
      priceWood: 3,
      race: {
        connect: {
          id: 3,
        },
      },
      health: 6,
      damage: 2,
      tech: 0,
      attack_type: AttackType.Melee,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Trade",
          description:
            "Umožní spoluhráči poslat suroviny (10g max 10w max) 1x za hru.",
          icon: "units/spells/trade.webp",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Voodoo Lounge",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Acolyte",
      icon: "units/BTNAcolyte.jpg",
      priceGold: 1,
      priceWood: 0,
      race: {
        connect: {
          id: 4,
        },
      },
      health: 3,
      damage: 1,
      tech: 1,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Repair",
          description:
            "Dělník může opravovat budovy/katapulty o 1hp za 1dřevo jednou za kolo.",
          icon: "units/spells/BTNRepairOff.webp",
        },
      },
      building: {
        connect: (
          await prisma.building.findMany({
            where: {
              name: {
                in: [
                  "Necropolis (level 1)",
                  "Hall of the Dead (level 2)",
                  "Black Citadel (level 3)",
                ],
              },
            },
          })
        ).map((e) => ({ id: e.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Skeleton",
      icon: "units/Skeleton.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 5,
      damage: 2,
      tech: 1,
      race: {
        connect: {
          id: 4,
        },
      },
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Crypt",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Ghoul",
      icon: "units/PREghoul.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 6,
      damage: 3,
      race: {
        connect: {
          id: 4,
        },
      },
      tech: 2,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Crypt",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Abomination",
      icon: "units/PREghoul.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 9,
      damage: 4,
      race: {
        connect: {
          id: 4,
        },
      },
      tech: 3,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Crypt",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
      ability: {
        create: {
          name: "Plague",
          icon: "units/spells/PASBTNPlagueCloud.webp",
          description: "Jednotka která zabije hnusa dostane 1 dmg",
        },
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Spider",
      icon: "units/crypt.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 7,
      race: {
        connect: {
          id: 4,
        },
      },
      damage: 2,
      tech: 1,
      attack_type: AttackType.AntiAir,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Temple of the Damned",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Banshee",
      icon: "units/banshee.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 7,
      race: {
        connect: {
          id: 4,
        },
      },
      damage: 3,
      tech: 2,
      attack_type: AttackType.AntiAir,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Temple of the Damned",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Necromancer",
      icon: "units/PRenecro.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 8,
      race: {
        connect: {
          id: 4,
        },
      },
      damage: 3,
      tech: 3,
      attack_type: AttackType.AntiAir,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Temple of the Damned",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
      ability: {
        create: {
          name: "Raise dead",
          icon: "units/spells/BTNRaiseDeadOff.webp",
          description: "Může vytvořit 1 akolytu do maximálního počtu",
        },
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Gargoyle",
      icon: "units/gargoyl.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 6,
      damage: 2,
      race: {
        connect: {
          id: 4,
        },
      },
      tech: 1,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Boneyard",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Destroyer",
      icon: "units/dests.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 7,
      damage: 3,
      race: {
        connect: {
          id: 4,
        },
      },
      tech: 2,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Boneyard",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Wyrm",
      icon: "units/warm.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 9,
      race: {
        connect: {
          id: 4,
        },
      },
      damage: 4,
      tech: 3,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Boneyard",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
      ability: {
        create: {
          name: "AOE DAMAGE",
          icon: "units/spells/PASBTNFreezingBreath.webp",
          description:
            "Okolní jednotky při utoku wyrmy utrpi 1 dmg(na stejnem poli)",
        },
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Meat Wagon",
      icon: "units/BTNMeatWagon.webp",
      priceGold: 3,
      priceWood: 3,
      health: 3,
      damage: 3,
      tech: 0,
      race: {
        connect: {
          id: 4,
        },
      },
      range: 3,
      attack_type: AttackType.Melee,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Building destroyer",
          icon: "units/spells/BTNHumanMissileUpOne.webp",
          description: "Při útoku na budovu katapult udělí 2x svého damage.",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Graveyard",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Obsidian",
      icon: "units/BTNObsidianStatue.webp",
      priceGold: 1,
      priceWood: 3,
      race: {
        connect: {
          id: 4,
        },
      },
      health: 10,
      damage: 2,
      tech: 0,
      range: 3,
      attack_type: AttackType.Melee,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Spell Immunity",
          icon: "units/spells/spellimunity.webp",
          description: "neplatí na ně kouzla hrdinů ani karet. (Passive)",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Tomb of Relice",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Wisp",
      icon: "units/BTNWisp.jpg",
      priceGold: 1,
      priceWood: 0,
      health: 3,
      damage: 1,
      race: {
        connect: {
          id: 2,
        },
      },
      tech: 1,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Repair",
          description:
            "Dělník může opravovat budovy/katapulty o 1hp za 1dřevo jednou za kolo.",
          icon: "units/spells/BTNRepairOff.webp",
        },
      },
      building: {
        connect: (
          await prisma.building.findMany({
            where: {
              name: {
                in: [
                  "Tree of Life (level 1)",
                  "Tree of Life (level 2)",
                  "Tree of Life (level 3)",
                ],
              },
            },
          })
        ).map((e) => ({ id: e.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Druid of the claws",
      icon: "units/Druid claw.jpg",
      priceGold: 1,
      priceWood: 1,
      race: {
        connect: {
          id: 2,
        },
      },
      health: 7,
      damage: 2,
      tech: 1,
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Ancient of War",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Mountain Giant",
      icon: "units/muntain giant.jpg",
      priceGold: 1,
      priceWood: 1,
      health: 9,
      damage: 3,
      tech: 2,
      race: {
        connect: {
          id: 2,
        },
      },
      attack_type: AttackType.Melee,
      special_unit: false,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Wood Hole",
          description:
            "Obřík stává double damage na poli s lesem(uplatnuje schopnost i když jsou lesy už vytěženy)",
          icon: "units/spells/BTNGrabTree.webp",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Ancient of War",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Archer",
      icon: "units/Archer.jpg",
      priceGold: 1,
      race: {
        connect: {
          id: 2,
        },
      },
      priceWood: 2,
      health: 5,
      damage: 2,
      tech: 1,
      attack_type: AttackType.AntiAir,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Ancient of Lore",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Huntress",
      icon: "units/PREHUNT.jpg",
      priceGold: 1,
      priceWood: 2,
      race: {
        connect: {
          id: 2,
        },
      },
      health: 6,
      damage: 3,
      tech: 2,
      attack_type: AttackType.AntiAir,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Ancient of Lore",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Druid of the hawk",
      icon: "units/druid hawk.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 7,
      race: {
        connect: {
          id: 2,
        },
      },
      damage: 4,
      tech: 3,
      attack_type: AttackType.AntiAir,
      special_unit: false,
      unit_type: UnitType.Ground,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Ancient of Lore",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Dryad",
      icon: "units/preDriad.jpg",
      priceGold: 1,
      priceWood: 2,
      health: 8,
      race: {
        connect: {
          id: 2,
        },
      },
      damage: 4,
      tech: 4,
      attack_type: AttackType.AntiAir,
      special_unit: false,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Beauty skin",
          icon: "units/spells/PASBTNMagicImmunity",
          description: "Driady jsou immuní vůči kartám",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Ancient of Lore",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Fairie dragon",
      icon: "units/fairydragon.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 6,
      damage: 2,
      race: {
        connect: {
          id: 2,
        },
      },
      tech: 1,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Chimaera Roost",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Hippo",
      icon: "units/HIPPOGRYPH.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 7,
      damage: 3,
      race: {
        connect: {
          id: 2,
        },
      },
      tech: 2,
      attack_type: AttackType.All,
      special_unit: false,
      unit_type: UnitType.Air,
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Chimaera Roost",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Chimaera",
      icon: "units/Chimera.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 8,
      damage: 4,
      race: {
        connect: {
          id: 2,
        },
      },
      tech: 3,
      attack_type: AttackType.All,
      special_unit: true,
      unit_type: UnitType.Air,
      ability: {
        create: {
          name: "AOE DAMAGE",
          icon: "units/spells/PASBTNCorrosiveBreath.webp",
          description:
            "Okolní jednotky při útoku chiméry utrpí 1 damage. (na stejném poli)",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Chimaera Roost",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Hippo Raider",
      icon: "units/hipporaider.jpg",
      priceGold: 2,
      priceWood: 2,
      health: 8,
      damage: 2,
      race: {
        connect: {
          id: 2,
        },
      },
      tech: 0,
      attack_type: AttackType.All,
      special_unit: true,
      unit_type: UnitType.Air,
      ability: {
        create: {
          name: "Mountain raider",
          icon: "units/spells/muntainrider.webp",
          description:
            "Pokud ma Hippo Raider plno životu muže se transfigurovat na 1 air jednotku daneho techu a 1 AA jednotku daného techu ( z 1 jednotky jsou dvě) potřeba splnit podmínku plného života.",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Chimaera Roost",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });

  await prisma.unit.create({
    data: {
      name: "Glaive thrower",
      icon: "units/BTNGlaiveThrower.webp",
      priceGold: 3,
      priceWood: 3,
      health: 3,
      damage: 3,
      tech: 0,
      range: 3,
      race: {
        connect: {
          id: 2,
        },
      },
      attack_type: AttackType.Melee,
      special_unit: true,
      unit_type: UnitType.Ground,
      ability: {
        create: {
          name: "Building destroyer",
          icon: "units/spells/BTNHumanMissileUpOne.webp",
          description: "Při útoku na budovu katapult udělí 2x svého damage.",
        },
      },
      building: {
        connect: await prisma.building
          .findFirst({
            where: {
              name: "Hunter's hall",
            },
          })
          .then((e) => ({ id: e?.id })),
      },
    },
  });
}
