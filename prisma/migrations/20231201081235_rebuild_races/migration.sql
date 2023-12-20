/*
  Warnings:

  - A unique constraint covering the columns `[raceId]` on the table `Ability` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "abilityId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Ability_raceId_key" ON "Ability"("raceId");
