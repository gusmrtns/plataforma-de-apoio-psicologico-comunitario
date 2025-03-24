-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('Paciente', 'Profissional');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "emailUsuar" TEXT NOT NULL,
    "senhaUsuar" TEXT NOT NULL,
    "tipoUsuar" "TipoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_emailUsuar_key" ON "Usuario"("emailUsuar");
