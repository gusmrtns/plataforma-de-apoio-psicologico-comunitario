/*
  Warnings:

  - A unique constraint covering the columns `[pacienteId]` on the table `Endereco` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[atendimentoId]` on the table `EvolucaoClinica` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId]` on the table `Profissional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pacienteId` to the `Atendimento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profissionalId` to the `Atendimento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pacienteId` to the `Endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pacienteId` to the `EvolucaoClinica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profissionalId` to the `EvolucaoClinica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atendimento" ADD COLUMN     "pacienteId" INTEGER NOT NULL,
ADD COLUMN     "profissionalId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Endereco" ADD COLUMN     "pacienteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "EvolucaoClinica" ADD COLUMN     "atendimentoId" INTEGER,
ADD COLUMN     "pacienteId" INTEGER NOT NULL,
ADD COLUMN     "profissionalId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_pacienteId_key" ON "Endereco"("pacienteId");

-- CreateIndex
CREATE UNIQUE INDEX "EvolucaoClinica_atendimentoId_key" ON "EvolucaoClinica"("atendimentoId");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_usuarioId_key" ON "Paciente"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_usuarioId_key" ON "Profissional"("usuarioId");

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvolucaoClinica" ADD CONSTRAINT "EvolucaoClinica_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvolucaoClinica" ADD CONSTRAINT "EvolucaoClinica_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvolucaoClinica" ADD CONSTRAINT "EvolucaoClinica_atendimentoId_fkey" FOREIGN KEY ("atendimentoId") REFERENCES "Atendimento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimento" ADD CONSTRAINT "Atendimento_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimento" ADD CONSTRAINT "Atendimento_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
