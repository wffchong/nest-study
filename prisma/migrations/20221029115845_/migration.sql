/*
  Warnings:

  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wakatime` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `wakatime` VARCHAR(191) NOT NULL;
