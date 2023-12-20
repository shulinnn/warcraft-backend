-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "raceId" INTEGER;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;
