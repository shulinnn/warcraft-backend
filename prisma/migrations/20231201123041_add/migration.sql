/*
  Warnings:

  - You are about to drop the `_CreepToItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ItemToRace` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `itemId` to the `Creep` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CreepToItem" DROP CONSTRAINT "_CreepToItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_CreepToItem" DROP CONSTRAINT "_CreepToItem_B_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToRace" DROP CONSTRAINT "_ItemToRace_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToRace" DROP CONSTRAINT "_ItemToRace_B_fkey";

-- AlterTable
ALTER TABLE "Creep" ADD COLUMN     "itemId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "itemId" INTEGER;

-- DropTable
DROP TABLE "_CreepToItem";

-- DropTable
DROP TABLE "_ItemToRace";

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creep" ADD CONSTRAINT "Creep_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
