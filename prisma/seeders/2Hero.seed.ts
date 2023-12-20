import { AttackType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
                "Zničí nepřítelovi vylepšený upgrade (z obchodu i z kovárny)",
              icon: "hero/BTNWarStomp.webp",
            },
            {
              name: "Command (auta)",
              description:
                "Vaši hrdinové dostanou po dobu života Chieftaina +1 pohyb (i spojenci)",
              icon: "hero/PASBTNCommand.webp",
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
              description: "Hrdina má každým útokem šanci na kritický útok.",
              icon: "hero/PASBTNCriticalStrike.webp",
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
                "Vyléčí jednotku na maximum (lze použít i na spojence)",
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
              icon: "hero/BTNBigBadVoodooability.webp",
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
                "Oživí vám nebo spojenci padlou jednotku (neoživuje hrdinu nebo dělníka.",
              icon: "hero/BTNHolyBolt.webp",
            },
            {
              name: "Holy Hammer",
              description:
                "Hrdina může dát druhému hrdinovi (spojenci,vlastní) nebo sobě nezranitelnost na 2 kola (přes celou mapu)",
              icon: "hero/BTNDivineIntervention.webp",
            },
            {
              name: "Peasant life",
              description:
                "Oživí padlého dělníka (může oživit i spojenci), dělník se objedví na poli kde se nachází Paladin.",
              icon: "hero/BTNResurrection.webp",
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
                "Banish - toto kouzlo zabije speciální jednotku (hrdina na ni nemusi ani útočit) / Unbanish - Hrdina obnoví vyčerpané kouzla speciálním jednotkám.",
              icon: "hero/BTNBanish.webp",
            },
            {
              name: "Mind drain",
              description:
                "Protihráč musí v jednom kole ukázat všechny jeho karty (pouze vám)",
              icon: "hero/BTNManaDrain.webp",
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
                " Zasáhne jednotky na jednom poli i letecké a způsobí jim 2 HP a v dalším kole nepřatelské ZASAŽENÉ jednotky mají snížený pohyb o 1 (lze použít max na 3 pole)",
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
                "Na dálku 3 polí pošle cívku která poškodí nepřátele o 5 HP a ještě jej omráčí na jedno kolo ( jednotka se nemůže hýbat ani utočit, toto kouzlo  je bráno jako negativní effekt dá se diabilityovat pouze omráčení (humanRace?Raceskou passivkou)",
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
              description: "Obnoví spojeneckémá hrdinovi již použitý ability",
              icon: "hero/BTNTranquility.webp",
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
              name: "Owl",
              description:
                "Kněžka si může z neutralniho obchodu vybrat jeden item zdarma",
              icon: "hero/BTNScout.webp",
            },
            {
              name: "Fire arrow",
              description: "Na jedno kolo dostřel +1",
              icon: "hero/BTNsearingarrows.webp",
            },

            {
              name: "Starfall",
              description:
                "kněžka se nemuže hýbat začne poškozovat všechny nepřátelské hrdiny o 1 hp ( přes celou mapou ) pokud se hráč s ní pohne ruší se kouzlo",
              icon: "hero/BTNstarfall.webp",
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
                "Ubere creepu na polovinu ( pouze vybranemu creepu ,né všem )",
              icon: "hero/BTNShadowStrike.webp",
            },
            {
              name: "Blink",
              description: "Hrdina dokáže se přenést na jakoukoliv budovu",
              icon: "hero/BTNBlink.webp",
            },
            {
              name: "Spiritual power",
              description:
                "+1 pohyb a 1 dmg pro všechny stromovce. Na 3 kola. ",
              icon: "hero/BTNSpiritOfVengeance.webp",
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
              name: "Dark walker",
              description: "Vyvolá zadarmo sp. jednotku",
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
                "Pokud ji použijete vaši i spojencovi hrdinové dostanou 2x odměny za zabití creepu ( Passivni aura, která se ruší až po smrti hrdiny)",
              icon: "hero/PASBTNVampiricAura.webp",
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
                "Dark ritual - Udělá zadarmo upgrade(je potřeba mít danou budovu kde se upg nachází)",
              icon: "hero/BTNDarkRitual.webp",
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
                " Hrdina zabije svou vlastní jednotku a tato jednotka dá své vlastní životy hrdinovy , pokud teda ma jednotka 7 hp tak hrdina bude mit celkove hp 17",
              icon: "hero/BTNDeathPact.webp",
            },
            {
              name: "Unholy (aura)",
              description:
                "Zvýší všem dělníkům +1HP ( i spojencovým ) (do doby dokud je váš hrdina naživu)",
              icon: "hero/PASBTNUnholyAura.webp",
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
                "Za každou zabitou jednotku obdrží hrdina 3 wood – 3x",
              icon: "hero/BTNImpale.webp",
            },
            {
              name: "Spikes",
              description:
                "Za každou zabitou jednotku dostanete jeden gold-  3x",
              icon: "hero/PASBTNThornShield.webp",
            },
            {
              name: "Trilobits",
              description:
                "Každé kolo mužete vyvolat jednoho pavouka(Melee) 5x, Pavouk má 3hp 1 dmg",
              icon: "hero/BTNCarrionScarabsOff.webp",
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
              description: "Postaví věž zadarmo.",
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
              name: "Water walker",
              description: "Naga může chodit po vodě ( passive ) (Aura)",
              icon: "hero/BTNTornado.webp",
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
                " Sníží nepřátelským jednotkám dmg o 1 ( jednotky co maji dmg 1 maji furt 1 ) 	Napořád do smrti pitlorda ( vyrobené jednotky mají taky o 1 dmg míň ! )",
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
                " pokud hrdina zabije / dorazí jednotku promění ji na svého dělníka (maximální počet dělníků 8) platí napořád ; neplatí na hrdiny. ( do smrti hrdiny)",
              icon: "hero/BTNTheBlackArrowOnOff.webp",
            },
            {
              name: "Demon's evolution",
              description:
                "Prohodí 2 různé jednotky mezi sebou a jedne z nich ubere 2 životy",
              icon: "hero/BTNCharm.webp",
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
              name: "Drunked armor",
              description: "Creep nezpusobuje žadný Dmg po dobu 3 kol hrdinovi",
              icon: "hero/PASBTNDrunkenDodge.webp",
            },
            {
              name: "Beer",
              description: " přidá vám 1 zlato ; 1 dřevo",
              icon: "hero/BTNStrongDrink.webp",
            },
            {
              name: "Triple technology",
              description:
                "Spáli-te li 2 vaše karty (libovolné) panda vytechuje (ihned) hlavní budovu na tier 2/3 podle aktuálního techu.",
              icon: "hero/BTNStormEarthFire.webp",
            },
          ],
        },
      },
    },
  });

  await prisma.hero.create({
    data: {
      name: " Fire lord",
      cost: 6,
      icon: "hero/BTNHeroAvatarOfFlame.webp",
      attack_type: AttackType.AntiAir,
      ability: {
        createMany: {
          data: [
            {
              name: "Supp burn",
              description: "Zakáže všem nepřitelům brat hrdinu z taverny",
              icon: "hero/BTNSoulBurn.webp",
            },
            {
              name: "Lava Spawn",
              description:
                "Na každé nepřetelské hlavní budově se vám zrodí jeden splozenec lávy ten má útok 2 a 5 HP (AA)",
              icon: "hero/BTNLavaSpawn.webp",
            },
            {
              name: "Exodus",
              description:
                "Zakáže všem používat neutralní budovy kromě taverny ( obchod,brani karet apod.)",
              icon: "hero/BTNVolcano.webp",
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
              name: "Acid bomb",
              description: "Ubere nepřátelským leteckým jednotkám na polovinu",
              icon: "hero/BTNAcidBomb.webp",
            },
            {
              name: "Gold war",
              description:
                "Můžetete použít na jakoukoliv jednotku nepřátelskou, ta umře a vy ( na creep  neplatí a na hrdiny taky ne) dostanete za ni jeji hodnotu zlata a dřeva.",
              icon: "hero/BTNTransmute.webp",
            },
          ],
        },
      },
    },
  });
}
