-- CreateTable
CREATE TABLE "User" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "numeroTelephone" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "surnom" TEXT NOT NULL,
    "idRole" INTEGER NOT NULL,
    CONSTRAINT "User_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "Role" ("idRole") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "idRole" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "labelRole" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Annonce" (
    "idAnnonce" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "localisation" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateDebut" DATETIME NOT NULL,
    "dateFin" DATETIME NOT NULL,
    "commentaireBotaniste" TEXT NOT NULL,
    "idUser" INTEGER NOT NULL
);
