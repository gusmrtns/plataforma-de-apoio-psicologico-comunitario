-- CreateEnum
CREATE TYPE "EscolaridadePac" AS ENUM ('Fundamental Incompleto', 'Fundamental Completo', 'Médio Incompleto', 'Médio Completo', 'Superior Incompleto', 'Superior Completo', 'Pós-Graduação Incompleto', 'Pós-Graduação Completo');

-- CreateEnum
CREATE TYPE "EstCivPac" AS ENUM ('Solteiro(a)', 'Casado(a)', 'União Estavél', 'Divorciado(a)', 'Viúvo(a)', 'Separado(a) Judicialmente', 'Prefiro Não Informar');

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nomePac" TEXT NOT NULL,
    "cpfPac" TEXT NOT NULL,
    "rgPac" TEXT NOT NULL,
    "celularPac" TEXT NOT NULL,
    "nomeRespPac" TEXT NOT NULL,
    "generoPac" TEXT NOT NULL,
    "orienSexPac" TEXT NOT NULL,
    "dataNascPac" TIMESTAMP(3) NOT NULL,
    "escolaridadePac" "EscolaridadePac" NOT NULL,
    "estCivilPac" "EstCivPac" NOT NULL,
    "fotoPac" TEXT,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);
