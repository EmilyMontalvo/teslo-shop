export const revalidate = 60

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@/interfaces";
import { redirect } from "next/navigation";


interface Props {

  params:{
    gender: Gender;
  }
  searchParams: {
    page?: string
  }
}


export default async function GenderPage({ params, searchParams }: Props) {

  const {gender} = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page, gender })

  if (products.length === 0) { redirect(`/gender/${gender}`) }



  const labels: Record<Gender, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todxs'
  }

  // if(id === 'kids'){
  //   notFound()
  // }

  return (
    <>
      <Title title={`Artículos para ${(labels)[gender]}`} subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}