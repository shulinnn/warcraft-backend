/*
  Warnings:

  - You are about to drop the column `ability_description` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `ability_icon` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `ability_name` on the `Race` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ability" ADD COLUMN     "raceId" INTEGER;

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "ability_description",
DROP COLUMN "ability_icon",
DROP COLUMN "ability_name";

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;
