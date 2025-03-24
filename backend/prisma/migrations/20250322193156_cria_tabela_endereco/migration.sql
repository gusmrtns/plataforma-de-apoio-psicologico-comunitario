-- CreateEnum
CREATE TYPE "UnidadeFederativaEnd" AS ENUM ('AC', 'AL', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF');

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "ufEnd" "UnidadeFederativaEnd" NOT NULL,
    "cidadeEnd" TEXT NOT NULL,
    "bairroEnd" TEXT NOT NULL,
    "ruaEnd" TEXT NOT NULL,
    "numeroEnd" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);
