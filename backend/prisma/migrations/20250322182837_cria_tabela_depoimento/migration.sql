/*
  Warnings:

  - You are about to drop the column `Avaliacao` on the `Atendimento` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Atendimento` table. All the data in the column will be lost.
  - Added the required column `statusAtend` to the `Atendimento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atendimento" DROP COLUMN "Avaliacao",
DROP COLUMN "status",
ADD COLUMN     "avaliacaoAtend" TEXT,
ADD COLUMN     "statusAtend" "StatusAtendimento" NOT NULL;

-- CreateTable
CREATE TABLE "Depoimento" (
    "id" SERIAL NOT NULL,
    "descricaoDep" TEXT NOT NULL,
    "dataHoraDep" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Depoimento_pkey" PRIMARY KEY ("id")
);
