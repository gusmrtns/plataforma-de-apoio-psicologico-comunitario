-- CreateTable
CREATE TABLE "EvolucaoClinica" (
    "id" SERIAL NOT NULL,
    "dataCadastroEvolClin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "relatorioEvolClin" TEXT NOT NULL,
    "ajusteTratamentoEvolClin" TEXT,
    "histFamiEvolClin" TEXT NOT NULL,
    "problEvolClin" TEXT NOT NULL,
    "medicEvolClin" TEXT NOT NULL,
    "qualSonoEvolClin" TEXT,
    "apetiteEvolClin" TEXT,
    "pensNegEvolClin" TEXT,

    CONSTRAINT "EvolucaoClinica_pkey" PRIMARY KEY ("id")
);
