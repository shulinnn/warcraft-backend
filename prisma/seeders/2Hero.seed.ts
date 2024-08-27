import { AttackType, PrismaClient } from "@prisma/client";
import prisma from "./client";

export default async function main() {
  const orcRace = await prisma.race.findFirst({ where: { name: "Orc" } });
  const humanRace = await prisma.race.findFirst({
    where: {
      name: "Human",
    },
  });
  const elfRace = await prisma.race.findFirst({
    where: {
      name: "Night Elf",
    },
  });
  const undeadRace = await prisma.race.findFirst({
    where: {
      name: "Undead",
    },
  });

  await prisma.hero.create({
    data: {
      name: "Tauren Chieftain",
      icon: "hero/BTNHeroTaurenChieftain.webp",
      cost: 5,
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: orcRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Critic Wave",
              description: "Ubere budově 8 hp, přes celou mapu (1x)",
              icon: "hero/BTNShockWave.webp",
            },
            {
              name: "Stomp",
              description:
                "Zničí nepřítelovi vylepšený upgrade (jen z kovárny)",
              icon: "hero/BTNWarStomp.webp",
            },
            {
              name: "Command (aura)",
              description:
                "Vaši hrdinové dostanou po dobu života Chieftaina +1 pohyb (i spojenci)",
              icon: "hero/PASBTNCommand.webp",
            },
            {
              name: "Reincarnation Aura (aura)",
              description:
                "Hrdinům se každe kolo obnoví jeden život. (platí po dobu života chieftaina) i pro spojence",
              icon: "hero/reinaura.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Blademaster",
      cost: 5,
      icon: "hero/BTNHeroBlademaster.webp",
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: orcRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Wind walk",
              description:
                "Hrdina se stane na 3 kola neviditelným, jakmile zaútočí už není neviditelný.",
              icon: "hero/BTNWindWalkOn.webp",
            },
            {
              name: "Mirror Image",
              description:
                "Hrdina naklonuje jakoukoliv nehrdinskou Orkskou vlastní jednotku (hodnoty zachovány). Nelže použít na creep.",
              icon: "hero/BTNMirrorImage.webp",
            },
            {
              name: "Critical strike (aura)",
              description:
                "Hrdina má každým útokem šanci na kritický útok. (padne-li 1-4 hrdina dá základní damage / 5/6 dá 2x damage)",
              icon: "hero/PASBTNCriticalStrike.webp",
            },
            {
              name: "Bladestorm",
              description:
                " Hrdina odpushuje všechny jednotky s jednoho pole na  2 pole vzdalene místo libovolným směrem. (Platí podminky terenu meelee nemuže na vodu atd)",
              icon: "hero/BTNBladestorm.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Farseer",
      cost: 6,
      icon: "hero/BTNHeroFarseer.webp",
      attack_type: AttackType.AntiAir,
      race: {
        connect: {
          id: orcRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Chain lighting",
              description:
                "Hrdina vyšle blesk který se odráží až na 3 jednotky a poškodí je o 3hp (přes celou mapu)",
              icon: "hero/BTNChainLightning.webp",
            },
            {
              name: "Far Sight",
              description: "Sebere soupeří dvě karty nebo 3 karty za 1 vaši",
              icon: "hero/BTNFarSight.webp",
            },
            {
              name: "Feral spirits",
              description: "Farseer vyvolá 2 vlky kteří mají 5 hp a 1 dmg",
              icon: "hero/BTNSpiritWolf.webp",
            },
            {
              name: "Card Explorer",
              description:
                "Hráč si smí vzít 2 karty ze svého balíčku (lze použit i na ally)",
              icon: "hero/BTNCardExplorer.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Shadow Hunter",
      cost: 6,
      icon: "hero/BTNShadowHunter.webp",
      attack_type: AttackType.AntiAir,
      race: {
        connect: {
          id: orcRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Cosmo heal",
              description:
                "Vyléčí jednotku na maximum (lze použít i na spojence) po celé mapě",
              icon: "hero/BTNHealingWave.webp",
            },
            {
              name: "Hex",
              description:
                "Promění jakoukoliv jednotku nebo hrdinu ve zvíře a jednotka nemůže útočit 3 kola.",
              icon: "hero/BTNHex.webp",
            },
            {
              name: "Vodoo dance",
              description:
                "Hrdina přečaruje jakoukoliv vyvolanou jednotku na mapě (platí i na Archimunda, Pekelníka a ostatní hrdinské summony) (platí přes celou mapu)",
              icon: "hero/BTNBigBadVoodooSpell.webp",
            },
            {
              name: "Serpent Ward",
              description:
                "Hrdina vytvoří Hada s 1 hp který utočí na dalku 3 polí (je statický) a má dmg 3. (lze vyvolat každe kolo 1noho lze použít 3x ",
              icon: "hero/BTnSerpentWard.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Paladin",
      cost: 5,
      icon: "hero/BTNHeroPaladin.webp",
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: humanRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Holy Light",
              description:
                "Oživí vám jakoukoliv základní jednotku. (ne-hrdinu nebo spec. jednotka) jednotka již musí být mrtvá",
              icon: "hero/BTNHolyBolt.webp",
            },
            {
              name: "Holy Hammer",
              description:
                "Hrdina může dát druhému hrdinovi (spojenci,vlastní) nebo sobě nezranitelnost na 2 kola (přes celou mapu)",
              icon: "hero/BTNDivineIntervention.webp",
            },
            {
              name: "God's Ankh",
              description:
                "Oživí svého druhého nebo spojeneckého hrdinu na hlavní budově (na hlavní budově hráče daného hrdiny) s 1hp a oživený hrdina nesmí jedno kolo nic dělat",
              icon: "hero/BTNResurrection.webp",
            },
            {
              name: "Devotion Aura",
              icon: "hero/BTNDevotionAura.webp",
              description:
                "Všichni hrdinové (vaši, spojenečtí) po zabití creepu mužou obdržet pouze knížky. Každa knížka přídá místo 1 dmg/hp (+2) dmg/hp a padne li Kniha schopnosti hráč ji obdrží normálně a nebo si muže obnovit již použitý spell. Tyto bonusy platí je-li Paladin stále naživu. ",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Blood Mage",
      cost: 6,
      icon: "hero/BTNHeroBloodElfPrince.webp",
      attack_type: AttackType.AntiAir,
      race: {
        connect: {
          id: humanRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Flame Strike",
              description:
                "Hrdina podpálí 1 pole za 2 života každou jednotku (neplatí na AIR) toto kouzlo lze použít na budovy, a budově ubere 5 HP (lze použít maximalne na dalku 3 polí)",
              icon: "hero/BTNWallOfFire.webp",
            },
            {
              name: "Banish/Unbanish",
              description:
                "Banish - toto kouzlo zabije speciální jednotku nebo summon jednotku (hrdina na ni nemusi ani útočit) / Unbanish - Hrdina obnoví vyčerpané kouzla speciálním jednotkám.",
              icon: "hero/BTNBanish.webp",
            },
            {
              name: "Mind drain",
              description:
                "Jeden protihráč musí v jednom kole ukázat všechny jeho karty (všem)",
              icon: "hero/BTNManaDrain.webp",
            },
            {
              name: "Phoenix",
              icon: "hero/BTNPhoenix.webp",
              description:
                "Vysummonuje fenixe který je air a má 8HP a 4 damage , Po každém provedenem útoku ztratí život.  ",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Archmage",
      cost: 6,
      icon: "hero/BTNHeroArchMage.webp",
      attack_type: AttackType.AntiAir,
      race: {
        connect: {
          id: humanRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Blizzard",
              description:
                "Zasáhne jednotky na jednom poli i letecké a způsobí jim 2 HP a v dalším kole nepřatelské ZASAŽENÉ jednotky mají snížený pohyb o 1 (lze použít max na 3 pole)",
              icon: "hero/BTNBlizzard.webp",
            },
            {
              name: "Water elemental",
              description:
                "Vytvoří jednotku elementala. Když hrdina zabije jednotku elementa I, dostane se do vyšší formy. Základní forma - 5hp, 1dmg, 1 pohyb. 2 forma (po zabizí jedné jednotky/hrdiny - má elementál 7hp 3dmg 1pohyb. 3 forma (po zabití 2 jednotek/hrdinů) - má elementál 10hp 4dmg, 1 pohyb",
              icon: "hero/BTNSummonWaterElemental.webp",
            },
            {
              name: "Fast Teleport",
              description: "Vyporti hrdinu na jakekoliv pole na mapě (1x)",
              icon: "hero/BTNMassTeleport.webp",
            },
            {
              name: "Magic hole Aura",
              description:
                "Zvyší damage všem speciálním a summon jednotkám o 1. ( po dobu svého žití) i spojeneckým.",
              icon: "hero/BTNMagicHoleAura.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Mountain King",
      cost: 5,
      icon: "hero/BTNHeroMountainKing.webp",
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: humanRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Storm bolt",
              description:
                "Na dálku 3 polí pošle cívku která poškodí nepřátele o 5 HP a ještě jej omráčí na jedno kolo ( jednotka se nemůže hýbat ani utočit, toto kouzlo je bráno jako negativní effekt dá se dispellovat pouze omráčení",
              icon: "hero/BTNStormBolt.webp",
            },
            {
              name: "Bash (aura)",
              description:
                "Hrdina má šanci při útoku na omráčení (háže se kostkou).Padne-li číslo 1 cíl není omráčen.Padne-li číslo 2,3x cíl je omráčen (nemůže chodit,útočit) effekt trvá jedno kolo.",
              icon: "hero/PASBTNBash.webp",
            },
            {
              name: "Fluffy rage",
              description:
                "Ukradne nepříteli jakýkoliv předmět který vlastní hrdina, předmět poté vlastní mountain king",
              icon: "hero/BTNAvatar.webp",
            },
            {
              name: "Hammer Clan",
              description:
                "Hrdina po použití tohoto kouzla dá své nebo spojenecké budově nezranitelnost na 2 kola. (budovy lze během nezranitelnosti opravovat)",
              icon: "hero/BTNHammerClan.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Keeper of the Grove",
      icon: "hero/BTNKeeperOfTheGrove.webp",
      cost: 6,
      attack_type: AttackType.AntiAir,
      race: {
        connect: {
          id: elfRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Wood taker",
              description: "Ukradne nepříteli 10 dřeva a dá vám",
              icon: "hero/BTNEntanglingRoots.webp",
            },
            {
              name: "Wild nature",
              description: "Postaví jakoukoliv budovu zdarma kromě věže.",
              icon: "hero/BTNEnt.webp",
            },
            {
              name: "Nature therapy",
              description: "Obnoví spojeneckému hrdinovi již použitý ability",
              icon: "hero/BTNTranquility.webp",
            },
            {
              description:
                "Hrdina generuje 1 wood a po vygenerování si vybere komu jej dá či si jej nechá (aura).",
              name: "Wood Aura",
              icon: "hero/BTNWoodAura.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Priestess of the Moon",
      cost: 6,
      icon: "hero/BTNPriestessOfTheMoon.webp",
      attack_type: AttackType.AntiAir,
      race: {
        connect: {
          id: elfRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Owl",
              description:
                "Kněžka si může z neutralniho obchodu vybrat jeden item zdarma",
              icon: "hero/BTNScout.webp",
            },
            {
              name: "Fire arrow",
              description:
                "Vytvoří oheň který odhaluje neviditelne jednotky a jednotky si u něj mohou vyměnovat itemy jeden item za kolo ( jen ally ) 1HP KAŽDY HRAČ MUŽE OBETOVAT DŘEVO NA PŘIDANÍ DŘEVA DO OHNE A ZVEDNE MU TIM HP O 1 POZOR KAŽDY HRAČ MUŽE DŘEVO PŘIDAT JEN JEDNOU. (Každý hráč může obětovat libovolný počet dřeva a zvedne mu tím HP o daný počet obětovaného dřeva. 1 wood = 1 hp)",
              icon: "hero/BTNsearingarrows.webp",
            },
            {
              name: "Starfall",
              description:
                "Kněžka se nemuže hýbat začne poškozovat všechny nepřátelské hrdiny o 1 hp ( přes celou mapou ) pokud se hráč s ní pohne ruší se kouzlo",
              icon: "hero/BTNstarfall.webp",
            },
            {
              name: "Arrow Aura",
              description:
                "Po dobu žití kněžky -tato aura přídá všem budovám které dokážou udělat nějaky střelný damage ( věže,nory,zigguraty, hlavky u UD po techu) (neplati na orský main který ma upgrade na ostny) +1 Damage. Plati i na spojence.",
              icon: "hero/BTNArrowAura.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Demon Hunter",
      cost: 5,
      icon: "hero/BTNHeroDemonHunter.webp",
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: elfRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Gold burn",
              description: "Spálí nepříteli 3 gold",
              icon: "hero/BTNManaBurn.webp",
            },
            {
              name: "Clean",
              description: "Odstraní nepříteli jeho schopnost rasy",
              icon: "hero/BTNImmolationOn.webp",
            },
            {
              name: "Metamorphosis",
              description:
                "Hrdina dostane +1 dmg a může na air jednotky (napořád)",
              icon: "hero/BTNMetamorphosis.webp",
            },
            {
              name: "Soul Collector Aura",
              description:
                "Pokud demon hunter zabije nepřátelského  hrdinu jeho tým  obdrží  1 zlato /v solu pouze majtel hrdiny. ",
              icon: "hero/BTNSoulCollectorAura.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Warden",
      cost: 5,
      icon: "hero/BTNHeroWarden.webp",
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: elfRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Creep maniac",
              description:
                "Wardenka vyšle coil který ma 2 dmg , za každý další item který vlastní nepřítelský hrdina se coilu zvyšuje damage o 3, přes celou mapu",
              icon: "hero/BTNShadowStrike.webp",
            },
            {
              name: "Blink",
              description: "Hrdina se dokáže přenést na jakoukoliv budovu",
              icon: "hero/BTNBlink.webp",
            },
            {
              name: "Spiritual power",
              description: "+1 pohyb a 1 dmg pro všechny stromovce. Na 3 kola.",
              icon: "hero/BTNSpiritOfVengeance.webp",
            },
            {
              name: "Creep Trap",
              description:
                "Wardenka toto kouzlo muže použít v tahu enemy když creepuje neutralni creep nebo passivniho moba. Po použítí tohoto kouzla obdrží vybraný creep +5Dmg v jeho kole utoku , tento bonus platí pouze jedno kolo. Lze použít 3x.V jednom kole lze použít pouze jednou (nestackuje se).",
              icon: "hero/BTNCreepTrapo.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Dread lord",
      cost: 6,
      icon: "hero/BTNHeroDreadLord.webp",
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: undeadRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Dark walker",
              description: "Vyvolá zadarmo sp. jednotku (platí i na spojence)",
              icon: "hero/BTNCarrionSwarm.webp",
            },
            {
              name: "Sleep",
              description:
                "uspí jednotku/hrdinu  na dobu 3 kol jednotka nemuže chodit ani utočit pokud je na jednotku zautočeno jednotka/hrdina se probouzí (Vlastní útok nelze! )",
              icon: "hero/BTNSleep.webp",
            },
            {
              name: "Vampirit (aura)",
              description:
                "Pokud ji použijete vaši i spojencovi hrdinové dostanou 2x gold za zabití creepu ( Passivni aura, která se ruší až po smrti hrdiny)",
              icon: "hero/PASBTNVampiricAura.webp",
            },
            {
              name: "Inferno",
              description:
                "Vysummonuje Pekelníka , který spadne kdekoliv na mapě po spawnuti utrpí všechny jednotky 2 DMG (na jednom poli) pekelník má 1 pohyb 5 Hp 2 DMG.",
              icon: "hero/BTNInferno.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Lich",
      cost: 6,
      icon: "hero/BTNLichVersion2.webp",
      attack_type: AttackType.AntiAir,
      race: {
        connect: {
          id: undeadRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Frost nova",
              description: "Ubere jednotce/hrdinovy 7 HP přes celou mapu",
              icon: "hero/BTNGlacier.webp",
            },
            {
              name: "Cold runner",
              description: "Hrdina může chodit přes skály. (Passive aura)",
              icon: "hero/BTNFrostArmorOff.webp",
            },
            {
              name: "Dark ritual",
              description:
                "Udělá zadarmo upgrade(podle vašeho techu / lze použít i na ally)",
              icon: "hero/BTNDarkRitual.webp",
            },
            {
              name: "Dead Rose",
              description: "Lich Spálí jedny cele stromy. (přes celou mapu) ",
              icon: "hero/BTNDeadRose.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Death knight",
      cost: 5,
      icon: "hero/BTNHeroDeathKnight.webp",
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: undeadRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Coil nova",
              description:
                "Zabije jednotku na dalku 5 poli kromě určiteho druhu creepu ( Creep 	level 3 max ! ) Hrdinovy dá 5 dmg",
              icon: "hero/BTNDeathCoil.webp",
            },
            {
              name: "Death pact",
              description:
                "Hrdina zabije svou vlastní jednotku a tato jednotka dá své vlastní životy hrdinovy , pokud teda ma jednotka 7 hp tak hrdina bude mit celkove hp 17",
              icon: "hero/BTNDeathPact.webp",
            },
            {
              name: "Unholy (aura)",
              description:
                "Zvyšuje dmg všem hrdinům podle počtu pernamentních itemů v inventáři (1 item = +1 damage, platí i na spojence)",
              icon: "hero/PASBTNUnholyAura.webp",
            },
            {
              name: "Arms of Undeads",
              description:
                "promeni 2 enemy unitky (ne-hrdina, ne-air) dle vyberu a udela z nich vlastni zombie - maji 1dmg a 1hp (pohyb 1 pole).",
              icon: "hero/BTNArms.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Crypt lord",
      cost: 5,
      icon: "hero/BTNHeroCryptLord.webp",
      attack_type: AttackType.Melee,
      race: {
        connect: {
          id: undeadRace?.id,
        },
      },
      ability: {
        createMany: {
          data: [
            {
              name: "Impale",
              description:
                "Za každou zabitou jednotku obdrží hrdina 1 gold - 3x",
              icon: "hero/BTNImpale.webp",
            },
            {
              name: "Magic Shield (aura)",
              description:
                "Hrdinové( i spojenečtí)  neobdrží od  utočných kouzel nepřátelských hrdinu žádný damage. Efekty kouzel ale stále platí. (např. darkranger prohodí hrdinu pod aurou neutrpí damage) ale efekt se provede.",
              icon: "hero/PASBTNThornShield.webp",
            },
            {
              name: "Trilobits",
              description:
                "Každé kolo mužete vyvolat jednoho pavouka(Melee) 5x, Pavouk má 3hp 1 dmg",
              icon: "hero/BTNCarrionScarabsOff.webp",
            },
            {
              name: "Worm Queen",
              description:
                "Vytvoří na mapě síť ,která dokaže lapit nepřátelskou  jednotku při pruchodu skrze ni. Jednotka dostává negativni efekt (karty sítě) takže se nemuže hybat ani utočit. (lze dispellovat). Cryplord může postavit až 3 síťe. Po využiti všech 3 již nelze stavit ani dostavovat další.(1 Sít / kolo) může být více na jednom poli. ",
              icon: "hero/BTNwq.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Goblin Tinker",
      icon: "hero/BTNHeroTinker.webp",
      cost: 5,
      attack_type: AttackType.Melee,
      ability: {
        createMany: {
          data: [
            {
              name: "Construct",
              description: "Postaví věž zadarmo pod sebou nebo kolem sebe",
              icon: "hero/PASBTNEngineeringUpgrade.webp",
            },
            {
              name: "Demolish",
              description: "Dokáže zničit věž na jedno seknutí",
              icon: "hero/BTNDemolish.webp",
            },
            {
              name: "Catapultium",
              description: "Hrdina vytvoří pod sebou katapult (zdarma)",
              icon: "hero/BTNCatapultium.webp",
            },
            {
              name: "Ultimate Factory",
              description:
                "Tinker vytvoři pod sebou přenosnou tovarnu, která je ultimatni tím, že se v ní dá vytvořit jakýkoliv druh jednotek (HERO,AA,Meele,Air,speciální  jednotky,dělníci,kata (prostě všechny units dané rasy) (neplati na Summon units) budová má 10hp.(počítá se jako budova) Nelze v ní stavit neutralni hrdiny.",
              icon: "hero/BTNfac.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Naga Witch",
      cost: 6,
      icon: "hero/BTNNagaSeaWitch.webp",
      attack_type: AttackType.AntiAir,
      ability: {
        createMany: {
          data: [
            {
              name: "Water hole",
              description:
                "Naga může zrušit efekt jakékoliv nepřátelské karty 1x ( i zlato dřevo , sežrat apod. ) (hraje se při tahu enemy )",
              icon: "hero/BTNColdArrowsOn.webp",
            },
            {
              name: "Shield",
              description:
                "na nagu neplati karty sežrat;přeměň;Síť (napořád) kouzlo je třeba aktivovat",
              icon: "hero/BTNNeutralManaShield.webp",
            },
            {
              name: "Water walker (Aura)",
              description: "Naga může chodit po vodě",
              icon: "hero/BTNTornado.webp",
            },
            {
              name: "Stoned Chain",
              description:
                "Hrdina po použití kouzla se muže přemístit na jakekoliv vodní políčko na mapě.(pokud ma water walk muze po ni chodit) a pokud vyleze na vodnim políčku u pevniny muže z vodního políčka na pevninu.",
              icon: "hero/BTNStonedChain.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Beastmaster",
      cost: 5,
      icon: "hero/BTNBeastMaster.webp",
      attack_type: AttackType.Melee,
      ability: {
        createMany: {
          data: [
            {
              name: "Summon unit",
              description:
                "vyčaruje zdarma unitku : Meele, Air , anti-air (podle techu hl.budovy)",
              icon: "hero/BTNGrizzlyBear.webp",
            },
            {
              name: "Hawk effect",
              description:
                "Hrdina může použit jakykoliv jiny ability hrdiny který je ve hře( vlastní;spojenec;nepřítel).",
              icon: "hero/BTNWarEagle.webp",
            },
            {
              name: "Neutral block",
              description:
                "Zakaže nepřatelským hrdinum dostavat itemy z creepu",
              icon: "hero/BTNStampede.webp",
            },
            {
              name: "Wild Life",
              description:
                "Beast Master naspawnuje random Pasivniho moba (pod sebou).",
              icon: "hero/BTNWildLife.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Pit lord",
      cost: 5,
      icon: "hero/BTNPitLord.webp",
      attack_type: AttackType.Melee,
      ability: {
        createMany: {
          data: [
            {
              name: "Roar",
              description:
                "Sežere jakoukoliv jednotku (ne-hrdina) platí i na air",
              icon: "hero/BTNHowlOfTerror.webp",
            },
            {
              name: "Double (aura)",
              description: "hrdina utočí na dva cíle zaráz.",
              icon: "hero/PASBTNCleavingAttack.webp",
            },
            {
              name: "Doom",
              description:
                "Tato schopnost vrátí použitou kartu zpátky zpět vám a její effekt trva, ale karta jde zpět  k vám do ruky , a lze použít ještě jednou. (Karta musí být použita v tomtéž kole jako  tato schopnost hrdiny)",
              icon: "hero/BTNDoom.webp",
            },
            {
              name: "Magma Water",
              description:
                "Pole s vodou se stanou lávové pole, přes které mužou už chodit všechny druhy jednotek. Každa jednotka ale utrpí 1 dmg na každem poli přes které projde,jediná vyjímka  jsou Pitlordi + Firelordi kteří jsou na těchto polích immuní vůči efektu lávového pole. ",
              icon: "hero/BTNMagmaWater.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Dark Ranger",
      cost: 6,
      icon: "hero/BTNBansheeRanger.webp",
      attack_type: AttackType.AntiAir,
      ability: {
        createMany: {
          data: [
            {
              name: "Silence",
              description:
                "Nepřátelský hrdina kterého si vyberete nemůže používat ability",
              icon: "hero/BTNSilence.webp",
            },
            {
              name: "Transform arrow",
              description:
                "Pokud hrdina zabije / dorazí jednotku promění ji na svého dělníka (maximální počet dělníků 8) platí napořád ; neplatí na hrdiny. ( do smrti hrdiny)",
              icon: "hero/BTNTheBlackArrowOnOff.webp",
            },
            {
              name: "Demon's evolution",
              description:
                "Prohodí 2 různé pozice jednotek mezi sebou a jedne z nich ubere 2 životy",
              icon: "hero/BTNCharm.webp",
            },
            {
              name: "Life Share",
              description:
                "Majitel který použije Lifeshare na vlastní (nebo spojeneckou) jednotku/hrdinu zpřístupní ostatním členum týmu vyčerpávat za ni veškeré svoje akce. (trvání jedno kolo) (tzn. Že za jednotku/hrdinu mužou všichni vykonavat pohyb/utok/použiti předmetu atd.) ",
              icon: "hero/BTNLifeShare.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Pandaren Brewmaster",
      cost: 5,
      icon: "hero/BTNPandarenBrewmaster.webp",
      attack_type: AttackType.Melee,
      ability: {
        createMany: {
          data: [
            {
              name: "Drunken armor",
              description:
                "Creep nezpusobuje žadný Dmg hrdinům (platí i na spojence)",
              icon: "hero/PASBTNDrunkenDodge.webp",
            },
            {
              name: "Beer",
              description:
                "Po použití naspawnuje kolem sebe 1x předmět piva, Kterykoliv hrdina si pivo muže vzít k sobě do inventáře (ally i enemy i vy i samotna panda). Tento item samozřejmě muže mit pouze 1x v inventaři jak říkaji pravidla o předmětech. Po použití předmětu piva si bud to mužete dolečit 3 životy nebo se teleportovat na tavernu. Toto kouzlo lze použít 3x.",
              icon: "hero/BTNStrongDrink.webp",
            },
            {
              name: "Triple technology",
              description:
                "Spáli-te li 2 vaše karty (libovolné) panda vytechuje (ihned) hlavní budovu na tier 2/3 podle aktuálního techu.",
              icon: "hero/BTNStormEarthFire.webp",
            },
            {
              name: "Dragon breathe",
              description:
                "Zvyší nebo sníží úroveň creepu o 1 (Zabity creep dropuje předměty z daneho levelu ) Statistiky creepu zůstávají stejné. ",
              icon: "hero/BTNDragonBreathe.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Fire lord",
      cost: 6,
      icon: "hero/BTNHeroAvatarOfFlame.webp",
      attack_type: AttackType.AntiAir,
      ability: {
        createMany: {
          data: [
            {
              name: "Item drainer",
              description: "Zničí nepříteli všechny itemy v inventáři",
              icon: "hero/BTNSoulBurn.webp",
            },
            {
              name: "Lava Spawn",
              description:
                "Na každé nepřátelské hlavní budově se vám zrodí jeden splozenec lávy ten má útok 2 a 5 HP (AA)",
              icon: "hero/BTNLavaSpawn.webp",
            },
            {
              name: "Exodus",
              description:
                "zničí neutralní budovu.Která nelze již pak používat (nikým)",
              icon: "hero/BTNVolcano.webp",
            },
            {
              name: "Burn Technology (Aura)",
              description:
                "pokud hrdina pod firelordovou aurou zemře (ally nebo vlastní ) exploduje a zabije nepřátelskou jednotku. Platí i pro samotného firelorda(ne-hrdina , ne-air) ",
              icon: "hero/BTNbt.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: "Alchemist",
      cost: 5,
      icon: "hero/BTNHeroAlchemist.webp",
      attack_type: AttackType.Melee,
      ability: {
        createMany: {
          data: [
            {
              name: "Heal spray",
              description:
                "Hrdina olečí všechny jednotky na jednom poli, co mají způsobené poškození na maximum.",
              icon: "hero/BTNHealingSpray.webp",
            },
            {
              name: "Insta time bottle",
              description:
                " Hrdina obdrží na svůj útok na jedno kolo INSTA KILL",
              icon: "hero/BTNAcidBomb.webp",
            },
            {
              name: "Gold war",
              description:
                "Můžetete použít na jakoukoliv jednotku nepřátelskou, ta umře a vy ( na creep  neplatí a na hrdiny taky ne) dostanete za ni jeji hodnotu zlata a dřeva.",
              icon: "hero/BTNTransmute.webp",
            },
            {
              name: "Dopping",
              description:
                "Alchymista dostane schopnost prodavat předměty za každý předmět dostane 1g a 1w. také může tradovat předměty s  jinýma hrdinama všechno lze prodavat /tradovat přes celou mapu.  1 předmět  za kolo.  (3x)",
              icon: "hero/BTNd.webp",
            },
          ],
        },
      },
    },
  });
}
