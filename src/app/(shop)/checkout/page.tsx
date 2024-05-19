import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";


const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],

]

export default function CheckOutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Ajustar elementos</span>
            <Link href={'/cart'} className="underline mb-5">Editar Carrito</Link>


            {/* Items */}
            {
              productInCart.map(product => (
                <div key={product.slug} className="flex">
                  <Image
                    src={`/products/${product.images[0]}`}
                    width={150}
                    height={100}
                    alt={product.title}
                    className="mr-5 rounded mb-5"
                  />
                  <div>
                    <p>{product.title}</p>
                    <p>{product.price} x 3</p>
                    <p className="font-bold">Subtotal: ${product.price *3}</p>
                    <button className="underline mb-5">Remover</button>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            
          <h2 className="text-2xl mb-2">Dirección de entrega</h2>
          <div className="mb-10">
            <p className="text-xl mb-2">Emily Montalvo</p>
            <p>Av.Siempre viva</p>
            <p>Col. Centro</p>
            <p>Alcaldia Cuautemoc</p>
            <p>Ciudad de mexico</p>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 rounded bg-gray-200 mb-10">

          </div>

            <h2 className="text-2xl mb-2">Resumen de Orden</h2>
            <div className=" grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$15</span>

              <span className="mt-5 text-xl">Total</span>
              <span className="mt-5 text-2xl text-right">$150</span>
            </div>

            <div className="mt-5 mb-6 w-full">

<p className="mb-5">
  {/* Disclaimer */}
  <span className="text-xs">Al hacer click en 'Colocar Orden', aceptas nuestro <a href="" className="underline">Términos y condiciones</a></span>
</p>

              <Link href={"/orders/123"} className="flex btn-primary justify-center"> Colocar orden</Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}