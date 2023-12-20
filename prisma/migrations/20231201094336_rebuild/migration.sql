-- CreateEnum
CREATE TYPE "UnitType" AS ENUM ('Ground', 'Air');

-- CreateEnum
CREATE TYPE "ItemObtainability" AS ENUM ('Creep', 'Shop');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('Permanent', 'Consumable');

-- CreateTable
CREATE TABLE "Map" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "team_count" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Creep" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "damage" INTEGER NOT NULL,
    "attack_type" "AttackType" NOT NULL,
    "unit_type" "UnitType" NOT NULL DEFAULT 'Ground',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Creep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "price_gold" INTEGER NOT NULL,
    "price_wood" INTEGER NOT NULL,
    "type" "ItemType" NOT NULL,
    "obtainability" "ItemObtainability" NOT NULL DEFAULT 'Shop',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CreepToMap" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CreepToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ItemToRace" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Map_name_key" ON "Map"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CreepToMap_AB_unique" ON "_CreepToMap"("A", "B");

-- CreateIndex
CREATE INDEX "_CreepToMap_B_index" ON "_CreepToMap"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CreepToItem_AB_unique" ON "_CreepToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CreepToItem_B_index" ON "_CreepToItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToRace_AB_unique" ON "_ItemToRace"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToRace_B_index" ON "_ItemToRace"("B");

-- AddForeignKey
ALTER TABLE "_CreepToMap" ADD CONSTRAINT "_CreepToMap_A_fkey" FOREIGN KEY ("A") REFERENCES "Creep"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreepToMap" ADD CONSTRAINT "_CreepToMap_B_fkey" FOREIGN KEY ("B") REFERENCES "Map"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreepToItem" ADD CONSTRAINT "_CreepToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Creep"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreepToItem" ADD CONSTRAINT "_CreepToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToRace" ADD CONSTRAINT "_ItemToRace_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToRace" ADD CONSTRAINT "_ItemToRace_B_fkey" FOREIGN KEY ("B") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;
