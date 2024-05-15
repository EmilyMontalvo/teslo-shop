import { QuantitySelector, SizeSelector, SlideShow } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: Props) {

  const { slug } = params;
  const product = initialData.products.find(product => product.slug === slug)

  if (!product) notFound();

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">

      {/* Slice Show */}
      <div className="col-span-1 md:col-span-2 bg-red-400">
        <SlideShow title={product.title} images={product.images}/>
      </div>

      {/* Product Details */}
      <div className="col-span-1 px-6">

        {/*Título */}
        <h1 className={`${titleFont.className} antialised font-bold text-xl`}>
          {product.title}
        </h1>

        {/* Price */}
        <p className="text-lg mb-5">{product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes}/>

        {/* Selector de Cantidad */}
        <QuantitySelector quantity={2}/>


        {/* Button */}
        <button className="btn-primary my-5">Agregar al Carrito</button>

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>



      </div>
    </div>
  );
}