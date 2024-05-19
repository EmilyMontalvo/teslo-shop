
export const generatePagination = (currentPage: number, totalPages: number) => {
    // Si el numero total de página es 7 o menos 
    //Vamos a mostrar todas las páginas sin puntos suspensivos
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    //Si la página actual está entre las primera 3 página
    //mostrar las primeras 3, puntos sustensivos y las últimas 2

    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages]
    }

    //Si la página actual está entre las últimas 3 pa´ginas
    // mostrar las primeras dos, puntos suspensivos y las ultimas 3
    if (currentPage >= totalPages -2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
    }

    // SI la página actual está en otro lugar medio
    // mostrar la primera página +, ..., pagina actual y vecinos

    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
    ]


}