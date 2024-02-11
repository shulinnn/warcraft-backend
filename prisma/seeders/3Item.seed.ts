import { ItemObtainability, ItemType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main() {
  ///General items
  await prisma.item.createMany({
    data: [
      {
        name: "Orb of death",
        description:
          "+1 Dmg , + AA utok, + spec eff: Hodťe kostkou padne - li 3x zabijete jakoukoliv jednotku/hrdinu na 1 útok) ",
        icon: "items/BTNOrbOfDeath.webp",
        type: ItemType.Permanent,
        price_gold: 2,
        price_wood: 1,
      },
      {
        name: "Orb of fire",
        description:
          "+1Dmg, +AA útok, +spec eff: přidává útok +1,+2,+3 podle čísla na kostce (platí i na budovy)",
        icon: "items/BTNOrbOfFire.webp",
        type: ItemType.Permanent,
        price_gold: 2,
        price_wood: 1,
      },
      {
        name: "Orb of ice",
        description:
          "+1Dmg, +AA útok, +Spec eff: hrdina může zničit hory svým útokem",
        icon: "items/BTNOrbOfIce.webp",
        type: ItemType.Permanent,
        price_gold: 2,
        price_wood: 1,
      },
      {
        name: "Orc of light",
        description: "+1Dmg, +AA útok, +Spec eff: +1 pohyb hrdiny při útoku",
        icon: "items/BTNOrbOfLight.webp",
        type: ItemType.Permanent,
        price_gold: 2,
        price_wood: 1,
      },
      {
        name: "Astro orb",
        description:
          "+1Dmg, +AA útok, +Spec eff: Při zabití creepu si může hráč vybrat item, neháže kostkou",
        icon: "items/AstroOrb.webp",
        type: ItemType.Permanent,
        price_gold: 2,
        price_wood: 1,
      },
      {
        name: "Poison orb",
        description:
          "+1Dmg, +AA útok, +Spec eff: Po útoku -1hp poškozené jednotce až do smrti jendotky(bráno jako neg. Efekt). ",
        icon: "items/BTNPoisonOrb.webp",
        type: ItemType.Permanent,
        price_gold: 2,
        price_wood: 1,
      },
      {
        name: "Claws",
        description: "+3 damage",
        icon: "items/BTNClaws.webp",
        type: ItemType.Permanent,
        price_gold: 1,
        price_wood: 1,
      },
      {
        name: "Boots of speed",
        description: "+1 pohyb",
        icon: "items/BTNBootsOfSpeed.webp",
        type: ItemType.Permanent,
        price_gold: 2,
        price_wood: 0,
      },
      {
        name: "Amulet of life",
        description: "+5hp",
        icon: "items/BTNAmuletOfLife.webp",
        type: ItemType.Permanent,
        price_gold: 1,
        price_wood: 3,
      },
      {
        name: "Book of kalimdor",
        description: "dovolí hrdinovi použít další kouzlo",
        icon: "items/BTNBookOfKalimdor.webp",
        type: ItemType.Consumable,
        price_gold: 1,
        price_wood: 0,
      },
      {
        name: "Small heal potion",
        description: "Doplní +5hp",
        icon: "items/BTNSmallHealPotion.webp",
        type: ItemType.Consumable,
        price_gold: 1,
        price_wood: 0,
      },
      {
        name: "Secret dust",
        description: "Odhalí všechny neviditelné jednotky na mapě",
        icon: "items/BTNSecretDust.webp",
        type: ItemType.Consumable,
        price_gold: 0,
        price_wood: 3,
      },
      {
        name: "Goblin visor",
        description: "Při použití máte nový hod kostkou ",
        icon: "items/BTNGoblinVisor.webp",
        type: ItemType.Permanent,
        price_gold: 0,
        price_wood: 5,
      },
      {
        name: "Ice Rock",
        description: "Vytvoří políčko se skálou",
        icon: "items/BTNIceRock.webp",
        type: ItemType.Consumable,
        price_gold: 0,
        price_wood: 5,
      },
      {
        name: "Great hall",
        description: "Postaví hlavní budovu kolem hrdiny",
        icon: "items/BTNGreatHall.webp",
        type: ItemType.Consumable,
        price_gold: 2,
        price_wood: 4,
      },
      {
        name: "Tower",
        description: "Postaví věž kolem hrdiny",
        icon: "items/BTNTower.webp",
        type: ItemType.Consumable,
        price_gold: 3,
        price_wood: 5,
      },
      {
        name: "Creep cage",
        description:
          "uzavře creep do klece a nepřitel na tento creep nemuže utočit",
        icon: "items/BTNCreepCage.webp",
        type: ItemType.Consumable,
        price_gold: 0,
        price_wood: 6,
      },
      {
        name: "Potion of gods",
        description: "hrdina se stane na 2 kola nezranitelným",
        icon: "items/BTNPotionOfGods.webp",
        type: ItemType.Consumable,
        price_gold: 1,
        price_wood: 0,
      },
      {
        name: "Scroll of heal",
        description: "Olečí všechny vaše i spojencovi jednotky na maximum",
        icon: "items/BTNScrollOfHeal.webp",
        type: ItemType.Consumable,
        price_gold: 3,
        price_wood: 3,
      },
      {
        name: "Scroll of damage",
        description: "Všechny VAŠE (ne spojenec) jednotky mají +1 dmg",
        icon: "items/BTNScrollOfDamage.webp",
        type: ItemType.Consumable,
        price_gold: 3,
        price_wood: 3,
      },
      {
        name: "Potion of heal",
        description: "Doplní +5hp",
        icon: "items/BTNSmallHealPotion.webp",
        type: ItemType.Consumable,
        price_gold: 1,
        price_wood: 0,
      },
    ],
  });

  ///race items
  await prisma.item.create({
    data: {
      name: "Potion of heal",
      description: "Doplní +5hp",
      race: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
      icon: "items/BTNSmallHealPotion.webp",
      type: ItemType.Consumable,
      price_gold: 1,
      price_wood: 0,
    },
  });

  await prisma.item.create({
    data: {
      name: "Scroll of town portal",
      description:
        "Vyteleportuje všechny jednotky (nemusite všechny) na hlavni budovu",
      icon: "items/BTNScrollOfTownPortal.webp",
      race: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
      type: ItemType.Consumable,
      price_gold: 2,
      price_wood: 2,
    },
  });

  await prisma.item.create({
    data: {
      name: "Move all",
      description: "Move pro všechny vaše  jednotky (i hrdiny) na 1 kolo +1",
      icon: "items/BTNMoveAll.webp",
      race: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
      type: ItemType.Consumable,
      price_gold: 3,
      price_wood: 1,
    },
  });

  await prisma.item.create({
    data: {
      name: "Beer recipe",
      description: "Vyportí hrdinu na jakekoliv pole s tavernou",
      icon: "items/BTNBeerRecipe.webp",
      race: {
        connect: {
          id: 1,
        },
      },
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 3,
    },
  });

  await prisma.item.create({
    data: {
      name: "Sheep tag",
      description: "Prohodí pozice všech pasivnich mobu dle výběru hráče",
      icon: "items/BTNSheepTag.webp",
      race: {
        connect: {
          id: 1,
        },
      },
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 2,
    },
  });

  await prisma.item.create({
    data: {
      name: "True sight potion",
      description: "Při použítí odhalí dropy všech pasivních mobů",
      icon: "items/BTNTrueSightPotion.webp",
      race: {
        connect: {
          id: 3,
        },
      },
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 1,
    },
  });

  await prisma.item.create({
    data: {
      name: "SpeedHax potion",
      description: "Hrdina dostane na 1 kolo +3 Pohyb",
      icon: "items/BTNSpeedHaxPotion.webp",
      race: {
        connect: {
          id: 3,
        },
      },
      type: ItemType.Consumable,
      price_gold: 1,
      price_wood: 0,
    },
  });

  await prisma.item.create({
    data: {
      name: "Verita serum",
      description:
        "Odhalí všechny nepřitelovi karty na 1 kolo (pouze majteli) ",
      icon: "items/BTNVeritaSerum.webp",
      race: {
        connect: {
          id: 4,
        },
      },
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 4,
    },
  });

  await prisma.item.create({
    data: {
      name: "Parasits",
      description:
        "Hrdina muže použit parazita na jakoukoliv jednotku ,jednotka poté ztrácí -1hp (Platí pouze na jednotky).lze použit jen na jednu jednotku. (negativní efekt) přes celou mapu.",
      icon: "items/BTNParasits.webp",
      race: {
        connect: {
          id: 4,
        },
      },
      type: ItemType.Consumable,
      price_gold: 1,
      price_wood: 0,
    },
  });

  await prisma.item.create({
    data: {
      name: "Breathe potion",
      description:
        "Hrdina smí chodit přes vodu po dobu 3 kol. Pokud po vypršení potionu zustane na vodě umře.",
      icon: "items/BTNBreathePotion.webp",
      race: {
        connect: {
          id: 2,
        },
      },
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 3,
    },
  });

  await prisma.item.create({
    data: {
      name: "Teleport stuff",
      description:
        " Vyteleportuje jednotku/hrdinu (i spojeneckou) na vaši hlavní budovu předmět poté zmizí. Funguje na vzdálenost 2 poli.",
      icon: "items/BTNTeleportStuff.webp",
      race: {
        connect: {
          id: 2,
        },
      },
      type: ItemType.Consumable,
      price_gold: 1,
      price_wood: 0,
    },
  });

  /// Creep Drops

  /// level1Creeps.map((c) => ({ id: c.id }))
  /*       creep: {
    connect: (
      await prisma.creep.findMany({ where: { level: 1 } })
    ).map((c) => ({ id: c.id })),
  }, */

  await prisma.item.create({
    data: {
      name: "Web",
      description:
        "zasituje  jednotku kterou může nadale napadat i melee jednotka(nemůže se hýbat) pouze útočit.( funguje přesně jako polapit)",
      icon: "items/BTNWeb.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 1 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Ring of regeneration",
      description:
        "+1hp regen pro hrdinu, až do maximálníhoi zdraví. (kolo počítáno až po odehrátí všech hráčů)",
      icon: "items/BTNRingOfRegeneration.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 1 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Sentry ward",
      description:
        "odhali neviditelné jednotky na políčku v rozsahu 1 pole kolem sebe a každý hráč stojící v rozsahu musí mít odhalené všechny karty(po dobu pobytu)",
      icon: "items/BTNSentryWard.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 1 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Healing wand",
      description:
        "vytvoří totem který lze zničit 3 hitama (nezáleží na dmg) healuje všechny jednotky v rozsahu jednoho pole kolem wardy a na wardě.Trva do zničení. ( o 1 hp)",
      icon: "items/BTNHealingWand.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 1 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Books",
      description:
        "(Hod kostkou) 1,2 - +1 dmg - 3,4 +1hp - 5,6 + další schopnost",
      icon: "items/BTNBooks.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (await prisma.creep.findMany()).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Gold/wood",
      description: "(hod kostkou) 1,2,3 - +1 Wood / 4,5.6 - +1 Gold",
      icon: "items/BTNBooks.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (await prisma.creep.findMany()).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Ruby",
      description: "přidá +5 hp pro hrdinu.",
      icon: "items/BTNRuby.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 2 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Pickaxe",
      description:
        "+1 Dmg , Dovoli hrdinovy těžit zlato / dřevo , (jako by byl dělnik ) ",
      icon: "items/BTNPickaxe.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 2 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Lion horn",
      description:
        "pernamentně přidá všem spojeneckým i vlastním hrdinům +3 hp ( skončí při zabití hrdiny nosící tento předmět)",
      icon: "items/BTNLionHorn.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 2 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Wand of illusion",
      description:
        "zkopíruje jednotku (lze použít pouze na základní jednotky) (MELEE,AA,AIR) neplatí na hrdiny,creep,spec.jednotky etc.",
      icon: "items/BTNWandOfIllusion.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 2 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Cloak od shadows",
      description:
        "hrdina se stává neviditelným pernamentně , po útoku se odhalí a nelze jej zneviditelnit po další dvě kola.",
      icon: "items/BTNCloakOfShadows.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 3 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Cloak of flames",
      description:
        "hrdina pálí všechny jednotky stojicí s ním na tomtéž poli 1 dmg/kolo",
      icon: "items/BTNCloakOfFlames.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 3 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Ankh",
      description:
        "Obnoví hrdinu po smrti ihned na místě kde padl jakmile bude hráč opět na tahu.(pouze hrdina nosící předmět)",
      icon: "items/BTNAnkh.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 3 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Staff of Negation",
      description:
        " zruší všechny kouzla/efekty na poli. (Síť,cripple,hero spelly apod) Neplatí na upgrady.",
      icon: "items/BTNStaffOfNegation.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 3 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Alien orb",
      description:
        "+1 Dmg, Hrdina po zabiti jednotky/hrdiny se muže vyteleportovat na jakoukoliv vlastní / spojeneckou  budovu.",
      icon: "items/BTNAlienOrb.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 4 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Undeads book",
      description: "vyvolá 2 melee a 2 AA jednotky",
      icon: "items/BTNUndeadsBook.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 4 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Skull",
      description:
        "vytvoří pole které ubírá nepřátelským jednotkám 1hp za kolo pokud na něm stojí.",
      icon: "items/BTNSkull.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 4 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Potion of balance",
      description:
        "Doplní hrdinovy životy na maximum a zároveň mu doplní spell",
      icon: "items/BTNPotionOfBalance.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
      creep: {
        connect: (
          await prisma.creep.findMany({ where: { level: 4 } })
        ).map((c) => ({ id: c.id })),
      },
    },
  });

  await prisma.item.create({
    data: {
      name: "Wand of lighting",
      description: "umožní hrdinovi pálit nepřátelské karty za 3wood/1 karta",
      type: ItemType.Permanent,
      icon: "items/BTNWandOfLighting.webp",
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
    },
  });

  await prisma.item.create({
    data: {
      name: "Titan helm",
      description: "+10 hp",
      icon: "items/BTNTitanHelm.webp",
      type: ItemType.Permanent,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
    },
  });

  await prisma.item.create({
    data: {
      name: "Dagger of escape",
      description:
        "hrdiná má svůj pohyb a po pohybu se může teleportovat o 3 pole warp stojí 1 wood (múže i přes vodu,skály)",
      icon: "items/BTNDaggerOfEscape.webp",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
    },
  });

  await prisma.item.create({
    data: {
      name: "Random Dragon Egg",
      icon: "items/BTNRandomDragonEgg.webp",
      description:
        "1x reroll (Pří picku draka který se vám nelíbí můžete rerollnout)\nRed Dragon - Pří každém útoku na budovy spálí nepříteli 1 dřevo / spálí pole se stromy\nnewline test",
      type: ItemType.Consumable,
      price_gold: 0,
      price_wood: 0,
      obtainability: ItemObtainability.Creep,
    },
  });
}
