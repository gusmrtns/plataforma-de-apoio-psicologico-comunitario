-- CreateEnum
CREATE TYPE "AbordagemProf" AS ENUM ('Psicanálise', 'Terapia Cognitivo-Comportamental', 'Gestalt-terapia', 'Análise do Comportamento', 'Outra');

-- CreateEnum
CREATE TYPE "FormacaoProf" AS ENUM ('Psicologia', 'Psiquiatria', 'Terapia Ocupacional', 'Outro');

-- CreateTable
CREATE TABLE "Profissional" (
    "id" SERIAL NOT NULL,
    "nomeProf" TEXT NOT NULL,
    "cpfProf" TEXT NOT NULL,
    "rgProf" TEXT NOT NULL,
    "celularProf" TEXT NOT NULL,
    "abordagemProf" "AbordagemProf" NOT NULL,
    "formacaoProf" "FormacaoProf" NOT NULL,
    "matriculaProf" TEXT NOT NULL,
    "localizacaoProf" TEXT NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id")
);
