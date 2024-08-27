import { PrismaClient } from "@prisma/client";

import prisma from "./client";

export default async function main() {
    await prisma.passiveMob.create({
        data: {
            name: 'Worm',
            icon: 'mob/worm.webp',
            description: 'Po zabití worma získá hráč jeden z tokenů poškození (1/2/3), lze použít na jednotky i hrdiny.',
            ability: {
                createMany: {
                    data: [
                        {
                            name: 'Worm Token +1',
                            description: 'Při použití získá hrdina/jednotka +1 damage na kolo.',
                            icon: 'mob/worm.webp'
                        },
                        {
                            name: 'Worm Token +2',
                            description: 'Při použití získá hrdina/jednotka +2 damage na kolo.',
                            icon: 'mob/worm.webp'
                        },
                        {
                            name: 'Worm Token +3',
                            description: 'Při použití získá hrdina/jednotka +3 damage na kolo.',
                            icon: 'mob/worm.webp'
                        }
                    ]
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Chicken',
            icon: 'mob/chicken.webp',
            description: 'Po zabití chickena získá hráč jeden z tokenů životů (1/2/3), lze použít na jednotky i hrdiny.',
            ability: {
                createMany: {
                    data: [
                        {
                            name: 'Chicken Token +1',
                            description: 'Při použití získá hrdina/jednotka +1 životů',
                            icon: 'mob/chicken.webp'
                        },
                        {
                            name: 'Chicken Token +2',
                            description: 'Při použití získá hrdina/jednotka +2 životů',
                            icon: 'mob/chicken.webp'
                        },
                        {
                            name: 'Chicken Token +3',
                            description: 'Při použití získá hrdina/jednotka +3 životů',
                            icon: 'mob/chicken.webp'
                        }
                    ]
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Deer',
            icon: 'mob/deer.webp',
            description: 'Po zabití Deera získá hráč jeden z tokenů dřeva (1/2/3).',
            ability: {
                createMany: {
                    data: [
                        {
                            name: 'Deer Token +1',
                            description: 'Při použití získá hráč +1 dřeva',
                            icon: 'mob/deer.webp'
                        },
                        {
                            name: 'Deer Token +2',
                            description: 'Při použití získá hráč +2 dřeva',
                            icon: 'mob/deer.webp'
                        },
                        {
                            name: 'Deer Token +3',
                            description: 'Při použití získá hráč +3 dřeva',
                            icon: 'mob/deer.webp'
                        }
                    ]
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Racoon',
            icon: 'mob/racoon.webp',
            description: 'Po zabití Racoona získá hráč jeden z tokenů zlata (1/2/3).',
            ability: {
                createMany: {
                    data: [
                        {
                            name: 'Racoon Token +1',
                            description: 'Při použití získá hráč +1 zlata',
                            icon: 'mob/racoon.webp'
                        },
                        {
                            name: 'Racoon Token +2',
                            description: 'Při použití získá hráč +2 zlata',
                            icon: 'mob/racoon.webp'
                        },
                        {
                            name: 'Racoon Token +3',
                            description: 'Při použití získá hráč +3 zlata',
                            icon: 'mob/racoon.webp'
                        }
                    ]
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Rabbit',
            icon: 'mob/rabbit.webp',
            description: 'Po zabití Rabbita získá hráč jeden z tokenů pohybu (1/2/3). Lze použít na jednotky i hrdiny.',
            ability: {
                createMany: {
                    data: [
                        {
                            name: 'Rabbit Token +1',
                            description: 'Při použití získá jednotka/hrdina +1 pohyb',
                            icon: 'mob/rabbit.webp'
                        },
                        {
                            name: 'Rabbit Token +2',
                            description: 'Při použití získá jednotka/hrdina +2 pohybu',
                            icon: 'mob/rabbit.webp'
                        },
                        {
                            name: 'Rabbit Token +3',
                            description: 'Při použití získá jednotka/hrdina +3 pohybu',
                            icon: 'mob/rabbit.webp'
                        }
                    ]
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Penguin',
            icon: 'mob/penguin.webp',
            description: 'Po zabití Penguina získá hráč jeden z tokenů workerů (1/2/3).',
            ability: {
                createMany: {
                    data: [
                        {
                            name: 'Penguin Token +1',
                            description: 'Při použití hráč získá +1 dělníka',
                            icon: 'mob/penguin.webp'
                        },
                        {
                            name: 'Penguin Token +2',
                            description: 'Při použití hráč získá +2 dělníky',
                            icon: 'mob/penguin.webp'
                        },
                        {
                            name: 'Penguin Token +3',
                            description: 'Při použití hráč získá +3 dělníky',
                            icon: 'mob/penguin.webp'
                        }
                    ]
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Wolf',
            icon: 'mob/wolf.webp',
            health: 3,
            description: 'Po zabití Wolfa získá hráč jeden z následujicích tokenů.',
            ability: {
                createMany: {
                    data: [
                        {
                            name: 'Wolf Token +1',
                            description: 'Při použití si hráč může vzít 1 token z pytlíku mobů',
                            icon: 'mob/wolf.webp'
                        },
                        {
                            name: 'Wolf Token +2',
                            description: 'Při použití si hráč může vzít 2 tokeny z pytlíku mobů',
                            icon: 'mob/wolf.webp'
                        },
                        {
                            name: 'Wolf Token +3',
                            description: 'Při použití si hráč může vzít 3 tokeny z pytlíku mobů',
                            icon: 'mob/wolf.webp'
                        }
                    ]
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Rat',
            icon: 'mob/rat.webp',
            description: 'Po zabití Rata získá hráč jeden z potionů',
            ability: {
                createMany: {
                    data: [
                        {
                            name: 'Rat Token Ocean Blue',
                            description: 'Očistí hrdinu od negativních efektů.',
                            icon: 'mob/image51.png'
                        },
                        {
                            name: 'Rat Token Gray',
                            description: 'Hrdina se stane na 1 kolo neviditelný',
                            icon: 'mob/image36.png'
                        },
                        {
                            name: 'Rat Token Phosphor',
                            description: 'Hrdina smí na 2 kola přecházet jakékoliv blokátory (Voda,Skály,Farma)',
                            icon: 'mob/image55.png'
                        },
                        {
                            name: 'Rat Token Red',
                            description: 'Umožní vám dát na 1 kolo critical strike ( háže se kostkou ) ',
                            icon: 'mob/image27.png'
                        },
                        {
                            name: 'Rat Token Gold',
                            description: 'Po použití můžete teleportovat hrdinu na jakékoliv pole se zlatým dolem (i vytěžený)',
                            icon: 'mob/image40.png'
                        }
                    ]
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Sheep',
            icon: 'mob/sheep.webp',
            description: 'Po zabití Sheepa získá hráč token',
            ability: {
                create: {
                    name: 'Sheep Token +1',
                    icon: 'mob/sheep.webp',
                    description: 'Při použití získá hráč možnost přidat spell svému hrdinovi.'
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Frog',
            icon: 'mob/frog.webp',
            description: 'Po zabití Froga získá hráč token',
            ability: {
                create: {
                    name: 'Frog Token +1',
                    icon: 'mob/frog.webp',
                    description: 'Při použití získá hráč možnost vzít kartu zadarmo.'
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Vulture',
            icon: 'mob/vulture.webp',
            description: 'Po zabití Vultura získá hráč token',
            ability: {
                create: {
                    name: 'Vulture Token +1',
                    icon: 'mob/vulture.webp',
                    description: 'Při použití získá hráč možnost udělat upgrade zadarmo.'
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Lizard',
            icon: 'mob/lizard.webp',
            description: 'Po zabití Lizarda získá hráč token',
            ability: {
                create: {
                    name: 'Lizard Token +1',
                    icon: 'mob/lizard.webp',
                    description: 'Při použití získá hráč možnost získat jakýkoliv token z pasívních mobů. (Ne wolf.)'
                }
            }
        }
    })
    await prisma.passiveMob.create({
        data: {
            name: 'Horse',
            icon: 'mob/horse.webp',
            health: 10,
            description: 'Po zabití Horsa získá hráč token',
            ability: {
                create: {
                    name: 'Horse Token +1',
                    icon: 'mob/horse.webp',
                    description: 'Při použití získá hráč možnost tradit se spoluhráčem.'
                }
            }
        }
    })
}
