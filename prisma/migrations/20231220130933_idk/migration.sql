-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_buildingId_fkey";

-- CreateTable
CREATE TABLE "_BuildingToUnit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BuildingToUnit_AB_unique" ON "_BuildingToUnit"("A", "B");

-- CreateIndex
CREATE INDEX "_BuildingToUnit_B_index" ON "_BuildingToUnit"("B");

-- AddForeignKey
ALTER TABLE "_BuildingToUnit" ADD CONSTRAINT "_BuildingToUnit_A_fkey" FOREIGN KEY ("A") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BuildingToUnit" ADD CONSTRAINT "_BuildingToUnit_B_fkey" FOREIGN KEY ("B") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
