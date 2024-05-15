import { ProductGrid, Title } from "@/components";
import { Product, Gender } from "@/interfaces";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: Gender;
  }
}

const seedProducts = initialData.products;

export default function CategoryPage({ params }: Props) {

  const { id } = params;
  const products = seedProducts.filter(product => product.gender == id)
  const labels: Record<Gender, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos'
  }

  // if(id === 'kids'){
  //   notFound()
  // }

  return (
    <>
      <Title title={`Artículos para ${(labels)[id]}`} subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}