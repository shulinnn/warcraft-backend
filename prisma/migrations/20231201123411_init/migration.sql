-- DropForeignKey
ALTER TABLE "Creep" DROP CONSTRAINT "Creep_itemId_fkey";

-- AlterTable
ALTER TABLE "Creep" ALTER COLUMN "itemId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Creep" ADD CONSTRAINT "Creep_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
