/*
  Warnings:

  - You are about to drop the column `languages` on the `Project` table. All the data in the column will be lost.
  - Added the required column `primary_language` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondary_language` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondary_language_2` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondary_language_3` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` DROP COLUMN `languages`,
    ADD COLUMN `primary_language` ENUM('MERN', 'PHP', 'NEXTjs') NOT NULL,
    ADD COLUMN `secondary_language` VARCHAR(50) NOT NULL,
    ADD COLUMN `secondary_language_2` VARCHAR(50) NOT NULL,
    ADD COLUMN `secondary_language_3` VARCHAR(50) NOT NULL;
