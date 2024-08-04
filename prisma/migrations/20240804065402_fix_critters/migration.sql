/*
  Warnings:

  - You are about to drop the column `description` on the `PassiveMob` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ability" ADD COLUMN     "passiveMobId" INTEGER;

-- AlterTable
ALTER TABLE "PassiveMob" DROP COLUMN "description";

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_passiveMobId_fkey" FOREIGN KEY ("passiveMobId") REFERENCES "PassiveMob"("id") ON DELETE SET NULL ON UPDATE CASCADE;
