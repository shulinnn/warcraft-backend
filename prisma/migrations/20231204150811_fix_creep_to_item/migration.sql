/*
  Warnings:

  - You are about to drop the column `itemId` on the `Creep` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Creep" DROP CONSTRAINT "Creep_itemId_fkey";

-- AlterTable
ALTER TABLE "Creep" DROP COLUMN "itemId";

-- CreateTable
CREATE TABLE "_CreepToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CreepToItem_AB_unique" ON "_CreepToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CreepToItem_B_index" ON "_CreepToItem"("B");

-- AddForeignKey
ALTER TABLE "_CreepToItem" ADD CONSTRAINT "_CreepToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Creep"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreepToItem" ADD CONSTRAINT "_CreepToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
