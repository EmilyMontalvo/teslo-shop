import { CartProduct } from "@/interfaces";
import { create } from 'zustand'
import { Product } from '../../interfaces/product.interface';
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[];
    addProductToCart: (product: CartProduct) => void
    getTotalItems: () => number
    //updateProductQuantity
    //otro
}

//Get mem permite obtener el estado actual del Store de zustand
export const useCartStore = create<State>()(


    // persist permite guardar mi store en el local storage y obtener del local storage
    persist(

        (set, get) => ({
            cart: [],

            getTotalItems: () => {
                const {cart} = get()

                return cart.reduce((total, item) => total + item.quantity, 0)
                
             },

            addProductToCart: (product: CartProduct) => {
                const { cart } = get();

                //1. Revisar si el producto existe en el carrito con la tabla seleccionada
                //El some determina si existe al menos un elemento que cumpla la condición que le voy a dar
                const productInCart = cart.some(
                    // Si el id y el size son iguales el porducto ya está en el carrito
                    (item) => item.id === product.id && item.id === product.size
                );

                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return;
                }

                //2. Se que el producto existe por talla, tengo que incrementar
                const updatedCartProducts = cart.map((item) => {

                    if (item.id === product.id && item.size === product.size) {
                        return { ...item, quantity: item.quantity + product.quantity }
                    }
                    return item;
                }
                )

                set({ cart: updatedCartProducts });

            }

        }
        )
        ,
        {
            name: "shopping-cart"
        }
    )

)