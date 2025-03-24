-- CreateEnum
CREATE TYPE "StatusAtendimento" AS ENUM ('Agendado', 'Realizado', 'Cancelado');

-- CreateTable
CREATE TABLE "Atendimento" (
    "id" SERIAL NOT NULL,
    "dataHoraAtend" TIMESTAMP(3) NOT NULL,
    "status" "StatusAtendimento" NOT NULL,
    "Avaliacao" TEXT,

    CONSTRAINT "Atendimento_pkey" PRIMARY KEY ("id")
);
