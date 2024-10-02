-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('BORROW', 'RETURN');

-- CreateTable
CREATE TABLE "User" (
    "u_id" SERIAL NOT NULL,
    "u_username" TEXT NOT NULL,
    "u_password" TEXT NOT NULL,
    "u_name" TEXT NOT NULL,
    "u_lastname" TEXT NOT NULL,
    "u_tel" TEXT NOT NULL,
    "u_email" TEXT NOT NULL,
    "u_role" "Role" NOT NULL,
    "u_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "u_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("u_id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "e_id" SERIAL NOT NULL,
    "e_name" TEXT NOT NULL,
    "e_model" TEXT NOT NULL,
    "e_description" TEXT NOT NULL,
    "e_color" TEXT NOT NULL,
    "e_image" TEXT NOT NULL,
    "e_number" TEXT NOT NULL,
    "e_shipping_number" TEXT NOT NULL,
    "e_date_received" TIMESTAMP(3) NOT NULL,
    "e_available_qty" INTEGER NOT NULL,
    "e_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "e_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("e_id")
);

-- CreateTable
CREATE TABLE "Borrow" (
    "b_id" SERIAL NOT NULL,
    "b_user_id" INTEGER NOT NULL,
    "b_equipment_id" INTEGER NOT NULL,
    "b_date_borrow" TIMESTAMP(3) NOT NULL,
    "b_date_return" TIMESTAMP(3) NOT NULL,
    "e_status" "Status" NOT NULL,
    "is_damage" BOOLEAN NOT NULL,
    "b_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "b_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Borrow_pkey" PRIMARY KEY ("b_id")
);

-- AddForeignKey
ALTER TABLE "Borrow" ADD CONSTRAINT "Borrow_b_user_id_fkey" FOREIGN KEY ("b_user_id") REFERENCES "User"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrow" ADD CONSTRAINT "Borrow_b_equipment_id_fkey" FOREIGN KEY ("b_equipment_id") REFERENCES "Equipment"("e_id") ON DELETE RESTRICT ON UPDATE CASCADE;
