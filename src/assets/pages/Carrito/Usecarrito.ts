import { useCallback, useEffect, useState } from "react"
import type { ItemCarrito } from "../../../types/ItemCarrito"

const getCarrito  = () => {
        if(typeof window !== "undefined"){
            const datos = localStorage.getItem("carritocompras")
            return datos ? JSON.parse(datos) : []
        }
        return []
    
}

export const useCarrito = () => {



    const [ listaItems, setListaItems] = useState<ItemCarrito[]>(getCarrito)

    useEffect(() => {
        const sync =() => setListaItems(getCarrito())

        window.addEventListener("CarritoActualizado", sync)
        window.addEventListener("storage", sync)

        return () => {
            window.removeEventListener("CarritoActualizado", sync)
            window.removeEventListener("storage", sync)
        }
    },[])

    const actualizarCarrito = useCallback((nuevoCarrito: ItemCarrito[]) => {
            localStorage.setItem("carritocompras", JSON.stringify(nuevoCarrito))
            setListaItems(nuevoCarrito)
            window.dispatchEvent(new Event("carritoActualizado"))
    }, [])



    const vaciarcarrito = useCallback(() => actualizarCarrito([]), [actualizarCarrito])

    return {
        listaItems,
        hasListaItems: Array.isArray(listaItems) && listaItems.length>0,
        vaciarcarrito
    }
}
