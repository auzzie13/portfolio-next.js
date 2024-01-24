-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_name` VARCHAR(255) NOT NULL,
    `code_link` VARCHAR(255) NOT NULL,
    `deployment_link` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `languages` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
