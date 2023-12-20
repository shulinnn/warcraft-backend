/*
  Warnings:

  - You are about to alter the column `description` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10000)`.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "description" SET DATA TYPE VARCHAR(10000);
