-- AlterTable
ALTER TABLE "Ability" ADD COLUMN     "upgradeId" INTEGER;

-- CreateTable
CREATE TABLE "Upgrade" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price_gold" INTEGER NOT NULL,
    "price_wood" INTEGER NOT NULL,
    "icon" TEXT,
    "description" TEXT NOT NULL,
    "tech" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "raceId" INTEGER NOT NULL,

    CONSTRAINT "Upgrade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_upgradeId_fkey" FOREIGN KEY ("upgradeId") REFERENCES "Upgrade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upgrade" ADD CONSTRAINT "Upgrade_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
