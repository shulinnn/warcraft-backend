import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main() {
  await prisma.upgrade.create({
    data: {
      name: "Power of Tower",
      price_gold: 1,
      price_wood: 1,
      description: "Tento upgrade lze zničit v prubehu hry „zničením upgradu",
      tech: 1,
      race: {
        connect: {
          id: 1,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Magic Tower",
              description: "2x damage na Summony a speciální jednotky",
              icon: "upgrades/magictower.webp",
            },
            {
              name: "Bomber Tower",
              description:
                "Dava AOE damage (-1hp) pro všechny jednotky na poli.",
              icon: "upgrades/bombertower.webp",
            },
            {
              name: "Air Tower",
              description:
                " O jedno vyšší dostřel místo dostřelu 2 má dostřel 3.",
              icon: "upgrades/airtower.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Bomb Shot",
      price_gold: 0,
      price_wood: 4,
      icon: "upgrades/bombshot.webp",
      description:
        "Z hlavní budovy vyletí střela přes celou mapu,která uděli jedne jednotce 3 dmg.platí i na air ( potřeba mít hlavní budovu. Tento upgrade lze zničit v prubehu hry „zničením upgradu“",
      tech: 1,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Lumber Jack",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/lumberjack.webp",
      description:
        "Po vylepšení upgradu vaši dělníci stojí 3 wood (lze použit i zakladni varianta jeden gold.) Tento upgrade lze zničit v prubehu hry „zničením upgradu“.",
      tech: 1,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Map Control",
      price_gold: 1,
      price_wood: 2,
      icon: "upgrades/lumberjack.webp",
      description:
        "Zakáže nepřítelům používat malé a velké teleporty (napořád) Tento upgrade lze zničit v prubehu hry „zničením upgradu“",
      tech: 2,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Lucky Chicken",
      price_gold: 0,
      price_wood: 5,
      icon: "upgrades/luckychicken.webp",
      description:
        "Hráč hodí kostkou ,jaké číslo mu padne tolik zlata dostane padne li: (1=1g ;2=2g 3x= 3g)",
      tech: 1,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Lost Package",
      price_gold: 0,
      price_wood: 5,
      icon: "upgrades/lostpackage.webp",
      description:
        "Po Použití naspawnuje bednu kdekoliv na mapě. Kdo bednu rozbije obdrží 2 karty. Tento upgrade lze zničit v prubehu hry „zničením upgradu“. (muže ji zničit enemy , i spojenec)",
      tech: 1,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Extra cannons",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/lostpackage.webp",
      description:
        "Po použití mají věže možnost 2x zaútočit v jednom kole.Trvání do konce života věží.",
      tech: 2,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Extra cannons",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/extracannons.webp",
      description:
        "Po použití mají věže možnost 2x zaútočit v jednom kole.Trvání do konce života věží.",
      tech: 2,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Enchanced Armors",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/enhancedarmors.webp",
      description:
        "Všichni vaši hrdinove můžou obdržet od jedne jednotky max 1 dmg.",
      tech: 3,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Enchanced Armors",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/enhancedarmors.webp",
      description:
        "Všichni vaši hrdinove můžou obdržet od jedne jednotky max 1 dmg.",
      tech: 3,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Long Rifle",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/longrifle.webp",
      description:
        "Zvýší dostřel všem vlastním střeleckým jednotkám o 1 na 1 kolo Tento upgrade lze zničit v prubehu hry „zničením upgradu“.",
      tech: 2,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Dwarf Tank",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/dwarftank.webp",
      description:
        "HP:20hp, dmg 0, Pohyb 2.Tato jednotka dokáže zničit budovu. tím že stojí na pozici z nepřátelskou budovou.Lze zničit v jednom kole jen jedna budova. (M)",
      tech: 3,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Robotic Leg",
      price_gold: 0,
      price_wood: 3,
      icon: "upgrades/roboticleg.webp",
      description:
        "Zvýší všem hrdinům pernamentně +1 pohyb (vašim) Tento upgrade lze zničit v prubehu hry „zničením upgradu“.",
      tech: 2,
      race: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Young Academy",
      price_gold: 0,
      price_wood: 3,
      description: "Tento upgrade lze zničit v prubehu hry „zničením upgradu",
      tech: 1,
      race: {
        connect: {
          id: 1,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Dítě Dalaranu",
              description: "Ma pohyb o 3 pole.2hp, Nemá útok. Muže stavit věž.",
              icon: "upgrades/dalarankid.webp",
            },
            {
              name: "Dítě Lordeonu",
              description: "Ma pohyb o 3 pole.2hp, Nemá útok. Může stavit věž.",
              icon: "upgrades/lordeonkid.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Angry Woods",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/dwarftank.webp",
      description: "Vykořeněné budovy +5Hp",
      tech: 1,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Eat tree",
      price_gold: 0,
      price_wood: 1,
      icon: "upgrades/eattree.webp",
      description: "Vykořeněná budova může jít stromy +6w",
      tech: 1,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Moonlight message",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/moonlightmessage.webp",
      description: "Obnoví hrdinovi již použitý spell",
      tech: 1,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Ent's teleport",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/entstelepoort.webp",
      description:
        "Teleportuje všechny vykořeněné budovy kamkoliv na  mapě (1x) (nelze voda,skály)",
      tech: 2,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Dispell",
      price_gold: 0,
      price_wood: 2,
      icon: "upgrades/dispell.webp",
      description:
        "Bludička(dělník) nyní má schopnost odpálit se(dispell) ,zapříčiní tak,že zruší na poli na kterém stojí všechny negativní effekty. (Jedná se o Přeměn, Polapit, Síťka UD, Zmrzačit, Oštěp,HEX (sh),Sleep,Worm Queen) ",
      tech: 1,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Ent orb",
      price_gold: 0,
      price_wood: 2,
      icon: "upgrades/entorb.webp",
      description: "Umožní stromovcům provádět útok na vzdušné  jednotky.",
      tech: 1,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Overmine",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/overmine.webp",
      description:
        "poskytne vám 3 spirity sovy které lze umístit na stromy přes celou mapu, a budou vám generovat dřevo - 1sova/1wood/1 kolo do zaniknutí lesů. Nepočítá se jako těžební tah.",
      tech: 2,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Magic Wisp",
      price_gold: 0,
      price_wood: 2,
      icon: "upgrades/magicwisp.webp",
      description:
        "Umožní bludičkám(dělníci) vybuchnout a tím zabít Summon jednotku. Musí stát na stejném poli,nepočítá se jako útok a bludička ztrácí život také. ",
      tech: 2,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Monolith",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/monolith.webp",
      description:
        "Postaví monolitický kámen kdekoliv na mapě (ne voda,skály) vlastník monolithu si poté může vybrat který mrtvý creep/pasivní mob může být vzkříšený na tomto kameni a lze znovu vycreepovat. Poté monolith mizí ze hry.",
      tech: 3,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Ancient Hydra",
      price_gold: 2,
      price_wood: 2,
      icon: "upgrades/ancienthydra.webp",
      description:
        "Hydra má: 15HP , 4dmg, pohyb 1 - Hydra může zaútočit 3x v jednom kole klidně i na různé cíle. (AA)",
      tech: 3,
      race: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Ancient Keys",
      price_gold: 2,
      price_wood: 1,
      icon: "upgrades/ancientkeys.webp",
      description:
        "Při vylepšení upgradu si hoďte kostkou Padne- li 1 hráč otevře Schopnost Silver Klíče. Padne-li 2 a 3x hráč otevře schopnost Gold klíče",
      tech: 1,
      race: {
        connect: {
          id: 1,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Silver key",
              description:
                "Zpřístupní spojenci vylepšovat upgrady na techu 2 (bez podmínky mít vytechovanou hlavku)",
              icon: "upgrades/silverkey.webp",
            },
            {
              name: "Gold Key",
              description:
                "Zpřístupní spojenci vylepšovat upgrady na techu 3 (bez podmínky mít vytechovanou hlavku)",
              icon: "upgrades/goldkey.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Extra work",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/extrawork.webp",
      description:
        "+1 pohyb pro dělníky a + 1 natěžená surovina (3kola) upgrade lze zničit v prubehu hry „zničením upgradu“",
      tech: 1,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Voodoo Staff",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/voodoostaff.webp",
      description:
        "Hrdina dá svým běžným utokem stun na 1 kolo (3x lze použit (kdykoliv) upgrade lze zničit v prubehu hry „zničením upgradu“",
      tech: 1,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Shimmer Weed",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/shimmerweed.webp",
      description:
        "upgrade lze zničit v prubehu hry „zničením upgradu“) – Rerollne vaši ruku . zamichejte vaše karty do balíčku a vezměte si nový počet karet , podle toho kolik jste jich měli na ruce. ",
      tech: 2,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Flame bats",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/flamebats.webp",
      description:
        "upgrade lze zničit v prubehu hry „zničením upgradu“) – Všichni trolli netopirníci obdrží damage 5 při útoku na budovy. Upgrade plati pouze na trolli netopyrníky.",
      tech: 1,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Boom bats",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/boombats.webp",
      description:
        "netopyrník ma schopnost vybuchnout obětuje se ale zabije jednotku (smí použít pouze na air) ",
      tech: 1,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Reincarnation",
      price_gold: 0,
      price_wood: 3,
      icon: "upgrades/reincarnation.webp",
      description:
        " upgrade lze zničit v prubehu hry „zničením upgradu“) Obnoví padlého hrdinu na hl. budově.",
      tech: 3,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "SpeedHax Well",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/speedhaxwell.webp",
      description:
        "Všechny jednotky(ally,vy,) na poli studny dostanou bonusovy pohyb +2 (Studna má 15HP) .Lze postavit všude (krom vody,skal) přes celou mapu",
      tech: 3,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Marketplace",
      price_gold: 0,
      price_wood: 4,
      icon: "upgrades/marketplace.webp",
      description:
        "Vylepší zakladní obchod o další lektvary - V obyčejnem voodoo salonku lze navíc zakoupit :",
      tech: 3,
      ability: {
        createMany: {
          data: [
            {
              name: "Ultra Heal potion",
              icon: "upgrades/ultrahealpotion.webp",
              description:
                "Všem hrdinům na jednom poli Doplní životy na max. (platí i na spojence). (1g)",
            },
            {
              name: "TP Ally potion",
              icon: "upgrades/tpallypotion.webp",
              description:
                "Vyportí vašeho hrdinu k Ally Hrdinovy není li žadny na mapě Potion je bez efektu. (1g)",
            },
            {
              name: "Burn potion",
              icon: "upgrades/burnpotion.webp",
              description:
                "po použí hrdina spálí libovolnou kartu nepříteli. (1g)",
            },
            {
              name: "Creep potion",
              icon: "upgrades/creeppotion.webp",
              description: "Dá Hrdinovi na 1 kolo Insta Kill na Creep (1g)",
            },
            {
              name: "Super Invisible Potion",
              icon: "upgrades/superinvisiblepotion.webp",
              description: "Dá hrdinovy Invisible na 3 kola. (1g)",
            },
            {
              name: "Good Night Potion",
              icon: "upgrades/goodnightpotion.webp",
              description:
                "Dá nahodné enemy Jednotce Sleep  efekt (3kola po utoku na ni se probudi) (1g) Padne-li 1 Sleep dostane Creep (Dle výběru) Padne-li 2 Sleep Dostane enemy Unit (dle výběru) Padne-li 3x Sleep Dostane enemy Hero (dle výběru)",
            },
          ],
        },
      },
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Altar",
      price_gold: 0,
      price_wood: 2,
      icon: "upgrades/altar.webp",
      description:
        "Umožní stavit hráči jakéhokoliv Hrdiny z taverny v hlavní budově.",
      tech: 1,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Guldan defense",
      price_gold: 0,
      price_wood: 3,
      icon: "upgrades/guldandefense.webp",
      description:
        "Hlavní budova kolem sebe vytvoří ostny a dává všem jednotkám tváří v tvář 1 dmg.",
      tech: 2,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Extended machine",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/extendedmachine.webp",
      description:
        "Vylepšení pro katapult. Po každem útoku na budovu dá cílové budově silný burn efekt -3hp /kolo. Efekt burnu se dá zrušit opravením za 1 dřevo (pravidla opravy) a opravující jednotka utrpí 1dmg.",
      tech: 1,
      race: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Undead defense",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/undeaddefense.webp",
      description: "Hlavky dávají 1TECH/1Dmg , 2TECH 2/Dmg 3TECH/3Dmg.",
      tech: 1,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Life return",
      price_gold: 0,
      price_wood: 3,
      icon: "upgrades/lifereturn.webp",
      description: "jednotku kterou vám zabili se vám obnoví v hl.budově(1x)",
      tech: 1,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Gold steal",
      price_gold: 1,
      price_wood: 2,
      icon: "upgrades/goldsteal.webp",
      description: " Seberte nepříteli 3 gold a nechte si je. (1x)",
      tech: 2,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Manipulation",
      price_gold: 1,
      price_wood: 0,
      icon: "upgrades/manipulation.webp",
      description: "Přečaruje jednotku ne-hrdina,ne-dělník (1x)",
      tech: 2,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Economic pass",
      price_gold: 0,
      price_wood: 4,
      icon: "upgrades/economicpass.webp",
      description:
        "Při použití poskytne slevu na cokoliv (co stojí zlato,dřevo) 100%. (1x)",
      tech: 2,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "The Rat",
      price_gold: 0,
      price_wood: 1,
      icon: "upgrades/therat.webp",
      description:
        "Vytvoří krysu u pohřebiště,ta může kupovat předměty hrdinům,brát hrdiny z taverny,brát karty s budov(celkově ovládat neutrální budovy) Hp:2 , útok: 0 , Pohyb: 3 Pole",
      tech: 1,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Ghost soul",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/ghostsoul.webp",
      description:
        "promění vaše dělníky v duchy , Duchové mají 1hp,1dmg,1pohyb - útočit na  ně může hrdina, speciální jednotka,karty(oštěp apod.) spelly a summon jednotky. (AA)",
      tech: 2,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Hell katapult",
      price_gold: 2,
      price_wood: 0,
      icon: "upgrades/hellkatapult.webp",
      description:
        "Po použití se  okamžitě naspawnuje na  hl.budově speciální katapult který má (1dmg , hp:5 , pohyb:1 , dostřel:celá mapa)",
      tech: 2,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Cursed gold mine",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/cursedgoldmine.webp",
      description:
        "vytvoří kdekoliv na  mapě prokletý důl který generuje 1g / kolo a má 1hp(dá se zničit) aby byl funkční musí na něm stát alspon jedna akolyta.",
      tech: 3,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Damn Well",
      price_gold: 1,
      price_wood: 1,
      icon: "upgrades/cursedgoldmine.webp",
      description:
        "Umožní vlastníkovi postavit zatracenou studnu , přes kterou si místo tahu braní/použití karty může kdokoliv ( ally,vy) vyměnit kartu která se mu nehodí pod podmínkou že jeho jednotka stojí na poli se studnou.Kartu, vrací hráč do spodu balíčku a poté si dobírá novou.(Studna má 15hp).Lze postavit všude (krom vody,skal) přes celou mapu. – 1Karta/kolo !",
      tech: 3,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Sacrifice Dagger",
      price_gold: 0,
      price_wood: 2,
      icon: "upgrades/sacrificedagger.webp",
      description:
        "Až 5x v jednom kole smíte obětovat svoji,nebo spojeneckou jednotku a jejími současnými životy,doplnit životy svého nebo spojeneckého hrdiny. Lze použít v jakémkoliv kole jakýkoliv počet obětování. Jde použít (5x).",
      tech: 1,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });

  await prisma.upgrade.create({
    data: {
      name: "Archimonde",
      price_gold: 2,
      price_wood: 2,
      icon: "upgrades/archimonde.webp",
      description:
        "jednotka se zrodí na jakékoliv vlastní budově.  Má 20 hp, 5 Dmg, 1pohyb (AA)",
      tech: 1,
      race: {
        connect: {
          id: 4,
        },
      },
    },
  });
}
