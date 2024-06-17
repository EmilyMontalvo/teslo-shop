import { CartProduct } from "@/interfaces";
import { create } from 'zustand'
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[];
    getSummaryInformation: () => {
        subTotal: number;
        tax: number;
        total: number;
        itemsInCart: number;
    }
    addProductToCart: (product: CartProduct) => void
    getTotalItems: () => number
    updateProductQuantity: (produtc: CartProduct, quantitty: number) => void
    removeProduct: (produtc: CartProduct) => void
}

//Get mem permite obtener el estado actual del Store de zustand
export const useCartStore = create<State>()(


    // persist permite guardar mi store en el local storage y obtener del local storage
    persist(

        (set, get) => ({
            cart: [],

            getSummaryInformation: () => {

                const { cart } = get();
                const subTotal = cart.reduce(
                    (subTotal, product) => (product.quantity * product.price) + subTotal,
                    0)
                const tax = subTotal * 0.15;
                const total = subTotal + tax;
                const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0)
                return {
                    subTotal, tax, total, itemsInCart
                }
            },

            getTotalItems: () => {
                const { cart } = get()

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

            },

            updateProductQuantity: (product: CartProduct, quantity: number) => {

                const { cart } = get();
                const updatedCartProduct = cart.map(item => {

                    if (item.id === product.id && item.size === product.size) {
                        return { ...item, quantity: quantity }
                    }

                    return item;

                })

                set({ cart: updatedCartProduct })

            },

            removeProduct: (produtc: CartProduct) => {
                const { cart } = get();
                const updatedCartProduct = cart.filter(
                    item => item.id !== produtc.id || item.size !== produtc.size
                );

                set({ cart: updatedCartProduct })
            }

        }
        )
        ,
        {
            name: "shopping-cart"
        }
    )

)