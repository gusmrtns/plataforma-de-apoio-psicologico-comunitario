/*
  Warnings:

  - You are about to drop the column `descricao` on the `Grupo_apoio` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Grupo_apoio` table. All the data in the column will be lost.
  - You are about to drop the column `regiao` on the `Grupo_apoio` table. All the data in the column will be lost.
  - Added the required column `descricao_grupo` to the `Grupo_apoio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_grupo` to the `Grupo_apoio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regiao_grupo` to the `Grupo_apoio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grupo_apoio" DROP COLUMN "descricao",
DROP COLUMN "nome",
DROP COLUMN "regiao",
ADD COLUMN     "descricao_grupo" TEXT NOT NULL,
ADD COLUMN     "nome_grupo" TEXT NOT NULL,
ADD COLUMN     "regiao_grupo" TEXT NOT NULL;
