/*
  Warnings:

  - You are about to drop the column `categroyId` on the `article` table. All the data in the column will be lost.
  - You are about to drop the `categroy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_categroyId_fkey`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `categroyId`,
    ADD COLUMN `categoryId` BIGINT UNSIGNED NULL;

-- DropTable
DROP TABLE `categroy`;

-- CreateTable
CREATE TABLE `category` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
