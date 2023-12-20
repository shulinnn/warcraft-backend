import { AttackType, PrismaClient, UnitType } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main() {
  const level1Items = [
    "Web",
    "Ring of regeneration",
    "Sentry ward",
    "Healing wand",
    "Books",
    "Gold/wood",
  ];

  const level2Items = [
    "Ruby",
    "Pickaxe",
    "Lion horn",
    "Wand of illusion",
    "Books",
    "Gold/wood",
  ];

  const level3Items = [
    "Cloak od shadows",
    "Cloak of flames",
    "Ankh",
    "Staff of Negation",
    "Books",
    "Gold/wood",
  ];

  const level4Items = [
    "Alien orb",
    "Undeads book",
    "Skull",
    "Potion of balance",
    "Books",
    "Gold/wood",
  ];

  const level5Items = [
    "Wand of lighting",
    "Titan helm",
    "Dagger of escape",
    "Random Dragon Egg",
    "Books",
    "Gold/wood",
  ];

  await prisma.creep.create({
    data: {
      name: "Gnoll",
      level: 1,
      health: 5,
      damage: 1,
      attack_type: AttackType.Melee,
      icon: "creeps/Gnoll1.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level1Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Dark Acolyte",
      level: 1,
      health: 3,
      damage: 2,
      attack_type: AttackType.AntiAir,
      icon: "creeps/Akolyta1.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level1Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Green Murloc",
      level: 1,
      health: 4,
      damage: 1,
      attack_type: AttackType.Melee,
      icon: "creeps/Murloc1.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level1Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Blue crab",
      level: 1,
      health: 4,
      damage: 2,
      attack_type: AttackType.Melee,
      icon: "creeps/Crab1.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level1Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Dark priest",
      level: 1,
      health: 5,
      damage: 1,
      attack_type: AttackType.AntiAir,
      icon: "creeps/Priest1.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level1Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Rogue demon",
      level: 1,
      health: 6,
      damage: 1,
      attack_type: AttackType.AntiAir,
      icon: "creeps/Rogue1.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level1Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Wild wolf",
      level: 1,
      health: 4,
      damage: 2,
      attack_type: AttackType.Melee,
      icon: "creeps/Wolf1.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level1Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Magic gnoll",
      level: 2,
      health: 6,
      damage: 3,
      attack_type: AttackType.AntiAir,
      icon: "creeps/Gnoll2.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level2Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Blue harpy",
      level: 2,
      health: 8,
      damage: 1,
      attack_type: AttackType.AntiAir,
      unit_type: UnitType.Air,
      icon: "creeps/Harpy2.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level2Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Orange murloc",
      level: 2,
      health: 6,
      damage: 2,
      attack_type: AttackType.AntiAir,
      icon: "creeps/Murloc2.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level2Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Ogre",
      level: 2,
      health: 7,
      damage: 2,
      attack_type: AttackType.Melee,
      icon: "creeps/Ogre2.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level2Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Skeleton archer",
      level: 2,
      health: 6,
      damage: 3,
      attack_type: AttackType.Melee,
      icon: "creeps/Skeleton2.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level2Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Sandcrab",
      level: 3,
      health: 8,
      damage: 2,
      attack_type: AttackType.Melee,
      icon: "creeps/Crab3.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level3Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Blue murlock",
      level: 3,
      health: 7,
      damage: 3,
      attack_type: AttackType.Melee,
      icon: "creeps/Murlock3.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level3Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "War ogre",
      level: 3,
      health: 8,
      damage: 4,
      attack_type: AttackType.Melee,
      icon: "creeps/Ogre3.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level3Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Zombie",
      level: 3,
      health: 6,
      damage: 5,
      attack_type: AttackType.Melee,
      icon: "creeps/Zombie3.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level3Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Forest troll",
      level: 3,
      health: 7,
      damage: 4,
      attack_type: AttackType.Melee,
      icon: "creeps/Troll3.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level3Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Mother spider",
      level: 4,
      health: 9,
      damage: 5,
      attack_type: AttackType.AntiAir,
      icon: "creeps/Spider4.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level4Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "War turtle",
      level: 4,
      health: 8,
      damage: 5,
      attack_type: AttackType.AntiAir,
      icon: "creeps/Turtle4.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level4Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Hell ghost",
      level: 4,
      health: 6,
      damage: 7,
      attack_type: AttackType.AntiAir,
      icon: "creeps/Ghost4.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level4Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Rock golem",
      level: 4,
      health: 7,
      damage: 5,
      attack_type: AttackType.Melee,
      icon: "creeps/Golem3.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level4Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Bronze dragon",
      level: 5,
      health: 15,
      damage: 5,
      attack_type: AttackType.AntiAir,
      unit_type: UnitType.Air,
      icon: "creeps/Bdragon5.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level5Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Green dragon",
      level: 5,
      health: 15,
      damage: 5,
      attack_type: AttackType.AntiAir,
      unit_type: UnitType.Air,
      icon: "creeps/Bdragon5.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level5Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Black dragon",
      level: 5,
      health: 15,
      damage: 5,
      attack_type: AttackType.AntiAir,
      unit_type: UnitType.Air,
      icon: "creeps/BlackDragon5.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level5Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Blue dragon",
      level: 5,
      health: 15,
      damage: 5,
      attack_type: AttackType.AntiAir,
      unit_type: UnitType.Air,
      icon: "creeps/icedragon5.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level5Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Gnoll veteran",
      level: 5,
      health: 9,
      damage: 7,
      attack_type: AttackType.Melee,
      icon: "creeps/Gnoll5.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level5Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Frost giant",
      level: 5,
      health: 12,
      damage: 7,
      attack_type: AttackType.Melee,
      icon: "creeps/Mamut5.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level5Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Armored ogre",
      level: 5,
      health: 11,
      damage: 6,
      attack_type: AttackType.Melee,
      icon: "creeps/Ogre5.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level5Items,
            },
          },
        }),
      },
    },
  });

  await prisma.creep.create({
    data: {
      name: "Cursed knight",
      level: 5,
      health: 14,
      damage: 4,
      attack_type: AttackType.Melee,
      icon: "creeps/Knight4.png",
      item: {
        connect: await prisma.item.findMany({
          where: {
            name: {
              in: level5Items,
            },
          },
        }),
      },
    },
  });
}
