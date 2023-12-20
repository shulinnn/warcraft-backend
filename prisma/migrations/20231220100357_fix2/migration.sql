-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AttackType" ADD VALUE 'Air';
ALTER TYPE "AttackType" ADD VALUE 'All';

-- AlterTable
ALTER TABLE "Ability" ADD COLUMN     "unitId" INTEGER;

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "priceGold" INTEGER NOT NULL,
    "priceWood" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "damage" INTEGER NOT NULL,
    "tech" INTEGER NOT NULL,
    "range" INTEGER NOT NULL DEFAULT 1,
    "movement" INTEGER NOT NULL DEFAULT 1,
    "attack_type" "AttackType" NOT NULL,
    "special_unit" BOOLEAN NOT NULL,
    "unit_type" "UnitType" NOT NULL DEFAULT 'Ground',
    "buildingId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;
