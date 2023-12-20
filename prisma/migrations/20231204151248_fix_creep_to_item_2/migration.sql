/*
  Warnings:

  - You are about to drop the `_CreepToItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CreepToItem" DROP CONSTRAINT "_CreepToItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_CreepToItem" DROP CONSTRAINT "_CreepToItem_B_fkey";

-- AlterTable
ALTER TABLE "Creep" ADD COLUMN     "itemId" INTEGER;

-- DropTable
DROP TABLE "_CreepToItem";

-- AddForeignKey
ALTER TABLE "Creep" ADD CONSTRAINT "Creep_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
