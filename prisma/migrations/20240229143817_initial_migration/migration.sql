-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_name` VARCHAR(255) NOT NULL,
    `code_link` VARCHAR(255) NOT NULL,
    `deployment_link` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `primary_language` ENUM('MERN', 'PHP', 'NEXTjs') NOT NULL,
    `secondary_language` VARCHAR(50) NOT NULL,
    `secondary_language_2` VARCHAR(50) NOT NULL,
    `secondary_language_3` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `message` TEXT NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
