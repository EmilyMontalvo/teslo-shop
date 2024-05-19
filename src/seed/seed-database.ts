import { create } from 'zustand';
import { initialData } from './seed';
import prisma from '../lib/prisma';



async function main() {

    // 1. Borrar registros previos
    // Así ejecuta todas de manera simultanea
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ]);

    //Así ejecuta una por una
    //   await prisma.productImage.deleteMany();
    //   await prisma.product.deleteMany();
    //   await prisma.category.deleteMany();

    console.log('Seed ejecutado correctamente');
}









(() => {

    if (process.env.NODE_ENV === 'production') return;


    main();
})();