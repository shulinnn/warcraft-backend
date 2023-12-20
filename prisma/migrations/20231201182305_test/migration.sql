/*
  Warnings:

  - You are about to drop the column `itemId` on the `Race` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Race" DROP CONSTRAINT "Race_itemId_fkey";

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "itemId";

-- CreateTable
CREATE TABLE "_ItemToRace" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToRace_AB_unique" ON "_ItemToRace"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToRace_B_index" ON "_ItemToRace"("B");

-- AddForeignKey
ALTER TABLE "_ItemToRace" ADD CONSTRAINT "_ItemToRace_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToRace" ADD CONSTRAINT "_ItemToRace_B_fkey" FOREIGN KEY ("B") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;
