-- CreateTable
CREATE TABLE "Grupo_apoio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "regiao" TEXT NOT NULL,

    CONSTRAINT "Grupo_apoio_pkey" PRIMARY KEY ("id")
);
